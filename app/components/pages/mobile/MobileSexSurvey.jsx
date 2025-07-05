import { useContext } from "react";
import { Atom, Banana, Cherry, Mars, NonBinary, Transgender, Venus } from "lucide-react";
import { nanoid } from "nanoid";
import chunk from "chunk";
import { MobileContext } from "../../contexts/MobileContext";
import RadioSelect from "../../inputs/RadioSelect";
import AnimatedDiv from "../../misc/AnimatedDiv";
import ScreenPreviousButton from "../../buttons/ScreenPreviousButton";
import ScreenNextButton from "../../buttons/ScreenNextButton";
import PaginationNextButton from "../../buttons/PaginationNextButton";
import SettingsDrawerButton from "../../buttons/SettingsDrawerButton";
import SettingsDrawer from "../../misc/SettingsDrawer";
import PaginationPreviousButton from "../../buttons/PaginationPreviousButton";
import ChatDrawer from "../../misc/ChatDrawer";
import ChatButton from "../../buttons/ChatButton";
import EndSpacing from "../../misc/EndSpacing";
import { useLocale } from "../../contexts/LocaleContext";

export default function MobileSexSurvey() {
  const {
    sex,
    setSex,
    anatomy,
    setAnatomy,
    gender,
    setGender,
    current_about_chunk,
    setCurrentAboutChunk,
    makeProgress
  } = useContext(MobileContext);

  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.sex");

  const about_data = [{
    question: getTranslation("questions.sex"),
    buttons: [
      { icon: <Mars />, label: getTranslation("buttons.gender.male"), id: "male-1" },
      { icon: <Venus />, label: getTranslation("buttons.gender.female"), id: "female-1" }
    ],
    current: sex,
    update: setSex
  }, {
    question: getTranslation("questions.anatomy"),
    buttons: [
      { icon: <Banana />, label: getTranslation("buttons.anatomy.penis"), id: "penis" },
      { icon: <Cherry />, label: getTranslation("buttons.anatomy.vagina"), id: "vagina" },
      { icon: <Atom />, label: getTranslation("buttons.anatomy.both"), id: "both" },
    ],
    current: anatomy,
    update: setAnatomy
  }, {
    question: getTranslation("questions.gender"),
    buttons: [
      { icon: <Mars />, label: getTranslation("buttons.gender.male"), id: "male-2" },
      { icon: <Venus />, label: getTranslation("buttons.gender.female"), id: "female-2" },
      { icon: <NonBinary />, label: getTranslation("buttons.gender.nonbinary"), id: "non-binary" },
      { icon: <Transgender />, label: getTranslation("buttons.gender.transgender"), id: "transgender" }
    ],
    current: gender,
    update: setGender
  }];

  const chunked_about = chunk(about_data, 2);
  const watchable_about = chunked_about[current_about_chunk];
  const about_progress = makeProgress(current_about_chunk, chunked_about.length);

  const unable_to_continue = chunk([sex, anatomy, gender], 2)[current_about_chunk].some((s) => !s || s.length < 1);

  // const Component = ({ children }) => (!unable_to_continue) ? <div>{ children }</div> : <AnimatedDiv>{ children }</AnimatedDiv>;

  return (
    <AnimatedDiv>
      <div className="pt-10 pr-10 pl-10">
        <div className="flex items-center justify-between gap-4">
          {(current_about_chunk > 0) ? (
            <PaginationPreviousButton current_chunk={current_about_chunk} total_chunks={chunked_about.length} moveHook={setCurrentAboutChunk} labeled />
          ) : (
            <ScreenPreviousButton labeled />
          )}
          <SettingsDrawerButton />
        </div>
      </div>
      <div className="flex items-center justify-start pr-10 pl-10 pt-6">
        <div className="flex flex-col gap-4">
          <span className="text-2xl">{getTranslation("title")}</span>
          {watchable_about.map((q) => {
            return (
              <div key={nanoid()} className="flex flex-col gap-4">
                <span className="text-xl">{q.question}</span>
                <RadioSelect buttons={q.buttons} current={q.current} update={q.update} />
              </div>
            );
          })}
          {(current_about_chunk < (chunked_about.length - 1)) ? (
            <PaginationNextButton current_chunk={current_about_chunk} total_chunks={chunked_about.length} moveHook={setCurrentAboutChunk} isDisabled={unable_to_continue} />
          ) : (
            <ScreenNextButton isDisabled={unable_to_continue} />
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