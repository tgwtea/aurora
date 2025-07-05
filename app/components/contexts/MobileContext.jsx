"use client"

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useDisclosure } from "@heroui/react";
import { nanoid } from "nanoid";
import { useChat } from "ai/react";
import { AuthContext } from "./AuthContext";
import { LocaleContext, useLocale } from "./LocaleContext";

export const surveyTypes = {
  SELECT: "select",
  RESET: "reset",
  INJECT: "inject"
};

function surveyReducer(state, action) {
  const { type } = action;
  const { SELECT, RESET, INJECT } = surveyTypes;

  if (type == INJECT) {
    const { payload } = action;

    let news = {};
    
    Object.entries(payload).forEach(([anatomy, questions]) => {
      news = {
        ...news,
        [anatomy]: (state[anatomy].length > 0) ? state[anatomy].map((x) => {
          const nq = questions.find((q) => q.position == x.position);
          
          return {
            ...x,
            text: (nq) ? nq.text : x.text
          };
        }) : questions
      };
    });

    return news;
  }

  if (type == SELECT) {
    const { anatomy, question, option } = action;

    const before = state[anatomy].find((q) => q.id == question);

    if (option != before.selected) {
      const after = [
        ...state[anatomy].filter((q) => q.id != question),
        {
          ...before,
          selected: option
        }
      ];

      after.sort((a, b) => a.position - b.position);

      return {
        ...state,
        [anatomy]: after
      };
    }

    return state;
  }

  if (type == RESET) { // NOT USED, REMOVE IF NECESSARY
    // const anatomies = Object.keys(state).filter((k) => !["score"].includes(k));
    const anatomies = Object.keys(state);

    const replication = { ...state };

    anatomies.forEach((anatomy) => {
      replication[anatomy] = replication[anatomy].map((q) => {
        return {
          ...q,
          selected: ""
        };
      });
    });

    return replication;
  }

  return state;
}

class SurveyQuestion {
  constructor(position, text, weight) {
    this.id = nanoid();
    this.position = position;
    this.text = text;
    this.weight = weight;
    this.selected = "";
  }
}

export const MobileContext = createContext();

export default function MobileContextProvider({ children }) {
  const { token } = useContext(AuthContext);
  const { locale, language, languages } = useContext(LocaleContext);
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile");

  useEffect(() => {
    if (!token || !token.value) window.location.reload();
  }, [token]);

  const [sex, setSex] = useState("");
  const [anatomy, setAnatomy] = useState("");
  const [gender, setGender] = useState("");

  const [current_page, setCurrentPage] = useState(0);
  const [total_pages, setTotalPages] = useState(0);

  const [show_privacy_notice, setShowPrivacyNotice] = useState(false);

  const [survey_result, setSurveyResult] = useState(0);

  const { isOpen: settingsIsOpen, onOpen: settingsOnOpen, onOpenChange: settingsOnOpenChange } = useDisclosure();
  const { isOpen: chatIsOpen, onOpen: chatOnOpen, onOpenChange: chatOnOpenChange } = useDisclosure();

  const weights = {
    penis: [9, 7, 10, 6, 5, 4, 8],
    vagina: [9, 7, 10, 6, 8, 6, 6, 8],
    both: [9, 8, 10, 6, 7]
  };

  const mapQuestions = (_anatomy) => getTranslation(`symptoms.questions.${_anatomy}`, []).map((q, i) => {
    return new SurveyQuestion((i + 1), q, weights[_anatomy][i] ?? 0);
  });

  const [survey_data, surveyDispatch] = useReducer(surveyReducer, {
    penis: [],
    vagina: [],
    both: []
  });

  useEffect(() => {
    surveyDispatch({
      type: surveyTypes.INJECT,
      payload: {
        penis: mapQuestions("penis"),
        vagina: mapQuestions("vagina"),
        both: mapQuestions("both")
      }
    });
  }, [locale]);

  const [current_survey_chunk, setCurrentSurveyChunk] = useState(0);

  const [current_about_chunk, setCurrentAboutChunk] = useState(0);

  const current_lang = languages.find((lang) => lang.value == language);

  const { messages: chatMessages, input: chatInput, handleInputChange: chatHandleInputChange, handleSubmit: chatHandleSubmit, append: chatAppend } = useChat({
    keepLastMessageOnError: true,
    headers: {
      "x-pineapple": (token && token.value) ? token.value : ""
    },
    body: {
      language: (current_lang) ? current_lang.label : "English" 
    }
  });

  const [chat_preprompt_made, setChatPrepromptMade] = useState(false);

  const makeProgress = (current_chunk, total_chunks) => (current_chunk * 100) / total_chunks;

  return (
    <MobileContext.Provider value={{
      sex,
      setSex,
      anatomy,
      setAnatomy,
      gender,
      setGender,
      current_page,
      setCurrentPage,
      total_pages,
      setTotalPages,
      survey_result,
      setSurveyResult,
      settingsIsOpen,
      settingsOnOpen,
      settingsOnOpenChange,
      chatIsOpen,
      chatOnOpen,
      chatOnOpenChange,
      survey_data,
      surveyDispatch,
      current_survey_chunk,
      setCurrentSurveyChunk,
      current_about_chunk,
      setCurrentAboutChunk,
      chatMessages,
      chatInput,
      chatHandleInputChange,
      chatHandleSubmit,
      chatAppend,
      chat_preprompt_made,
      setChatPrepromptMade,
      makeProgress,
      show_privacy_notice,
      setShowPrivacyNotice
    }}>
      {children}
    </MobileContext.Provider>
  );
}