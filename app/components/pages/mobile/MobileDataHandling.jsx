import AnimatedDiv from "../../misc/AnimatedDiv";
import ScreenNextButton from "../../buttons/ScreenNextButton";
import ScreenPreviousButton from "../../buttons/ScreenPreviousButton";
import SettingsDrawerButton from "../../buttons/SettingsDrawerButton";
import SettingsDrawer from "../../misc/SettingsDrawer";
import ChatDrawer from "../../misc/ChatDrawer";
import ChatButton from "../../buttons/ChatButton";
import { useContext } from "react";
import { useLocale } from "../../contexts/LocaleContext";
import { MobileContext } from "../../contexts/MobileContext";
import EndSpacing from "../../misc/EndSpacing";
import DataHandlingNotice from "../../misc/DataHandlingNotice";

export default function MobileDataHandling() {
  const { setShowPrivacyNotice } = useContext(MobileContext);
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("handling");
  
  return (
    <AnimatedDiv>
      <div className="pt-10 pr-10 pl-10">
        <div className="flex items-center justify-between">
          <ScreenPreviousButton labeled callback={() => setShowPrivacyNotice(false)} />
          <SettingsDrawerButton />
        </div>
      </div>
      <div className="flex items-center justify-center pl-10 pr-10 pt-6">
        <div className="flex flex-col gap-6">
          <DataHandlingNotice big="text-2xl" small="text-lg" />
          <ScreenNextButton color="success" label={getTranslation("understood")} callback={() => setShowPrivacyNotice(false)} />
          <EndSpacing />
        </div>
      </div>
      <SettingsDrawer />
      <ChatDrawer />
      <ChatButton />
    </AnimatedDiv>
  );
}