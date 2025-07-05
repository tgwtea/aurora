import { useContext } from "react";
import { cn, Progress } from "@heroui/react";
import { Ban, CircleCheck } from "lucide-react";
import chunk from "chunk";
import { MobileContext, surveyTypes } from "../../contexts/MobileContext";
import AnimatedDiv from "../../misc/AnimatedDiv";
import RadioSelect from "../../inputs/RadioSelect";
import ScreenPreviousButton from "../../buttons/ScreenPreviousButton";
import PaginationNextButton from "../../buttons/PaginationNextButton";
import ScreenNextButton from "../../buttons/ScreenNextButton";
import PaginationPreviousButton from "../../buttons/PaginationPreviousButton";
import SettingsDrawerButton from "../../buttons/SettingsDrawerButton";
import SettingsDrawer from "../../misc/SettingsDrawer";
import ChatDrawer from "../../misc/ChatDrawer";
import ChatButton from "../../buttons/ChatButton";
import EndSpacing from "../../misc/EndSpacing";
import { useLocale } from "../../contexts/LocaleContext";

export default function MobileSymptomsSurvey() {
  const {
    anatomy,
    makeProgress,
    survey_data,
    surveyDispatch,
    current_survey_chunk,
    setCurrentSurveyChunk,
    setSurveyResult
  } = useContext(MobileContext);

  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.symptoms");
  const getTranslationConstant = useTranslation("mobile.constants");

  const survey = survey_data[anatomy] ?? [];
  const chunked_questions = chunk(survey, 2);
  const watchable_questions = chunked_questions[current_survey_chunk];
  const survey_progress = makeProgress(current_survey_chunk, chunked_questions.length); 

  const unable_to_continue = watchable_questions.some((s) => !s.selected || s.selected.length < 1);

  return (
    <AnimatedDiv>
      <div className="pt-10 pr-10 pl-10">
        <div className="flex items-center justify-center gap-4">
          {(current_survey_chunk > 0) ? (
            <PaginationPreviousButton current_chunk={current_survey_chunk} total_chunks={chunked_questions.length} moveHook={setCurrentSurveyChunk} />
          ) : (
            <ScreenPreviousButton />
          )}
          <Progress isStriped value={survey_progress} aria-label={getTranslation("progress", " ")} />
          {/* <span className="text-sm">{(survey_progress <= 100) ? survey_progress.toFixed(0) : 100}%</span> */}
          <SettingsDrawerButton />
        </div>
      </div>
      <div className="flex items-center justify-start pr-10 pl-10 pt-6">
        <div className="flex flex-col gap-4">
          <span className="text-2xl">{getTranslation("title")}</span>
          <span className="text-md text-gray-500">{getTranslation("subtitle")}</span>
          {(survey && survey.length > 0) ? (
            <>
              {watchable_questions.map((q) => {
                return (
                  <div key={q.id} className="flex flex-col gap-4">
                    <span className="text-xl">{q.position}. {q.text}</span>
                    <RadioSelect buttons={[
                      { icon: <CircleCheck />, label: getTranslationConstant("yes"), id: `yes-${q.id}` },
                      { icon: <Ban />, label: getTranslationConstant("no"), id: `no-${q.id}` }
                    ]} classNames={{
                      wrapper: cn("grid grid-cols-2")
                    }} current={q.selected} update={(btn) => surveyDispatch({
                      type: surveyTypes.SELECT,
                      anatomy,
                      question: q.id,
                      option: btn
                    })} />
                  </div>
                );
              })}
            </>
          ) : ""}
          {(current_survey_chunk < (chunked_questions.length - 1)) ? (
            <PaginationNextButton current_chunk={current_survey_chunk} total_chunks={chunked_questions.length} moveHook={setCurrentSurveyChunk} isDisabled={unable_to_continue} />
          ) : (
            <ScreenNextButton isDisabled={unable_to_continue} extraHook={() => {
              setSurveyResult(survey_data[anatomy].reduce((acc, curr) => {
                if (curr.selected.startsWith("yes")) return acc + curr.weight;

                return acc;
              }, 0));
            }} />
          )}
          <EndSpacing />
        </div>
      </div>
      <SettingsDrawer />
      <ChatDrawer />
      <ChatButton />
    </AnimatedDiv>
  );
}