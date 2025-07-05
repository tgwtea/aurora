import { ArrowRight } from "lucide-react";
import AnimatedDiv from "../../misc/AnimatedDiv";
import ScreenNextButton from "../../buttons/ScreenNextButton";
import ScreenPreviousButton from "../../buttons/ScreenPreviousButton";
import SettingsDrawerButton from "../../buttons/SettingsDrawerButton";
import SettingsDrawer from "../../misc/SettingsDrawer";
import ChatDrawer from "../../misc/ChatDrawer";
import ChatButton from "../../buttons/ChatButton";
import { useContext } from "react";
import { BreakpointsContext } from "../../contexts/BreakpointsContext";
import { useLocale } from "../../contexts/LocaleContext";
import Markdown from "markdown-to-jsx";
import { markdown_options } from "@/lib/misc";
import { MobileContext } from "../../contexts/MobileContext";

export default function MobilePrivacy() {
  const { calculateVPStyles } = useContext(BreakpointsContext);
  const { setShowPrivacyNotice } = useContext(MobileContext);
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.privacy");
  
  return (
    <AnimatedDiv>
      <div className={calculateVPStyles({
        tiny: "pt-10 pr-10 pl-10",
        default: "header p-10"
      })}>
        <div className="flex items-center justify-between">
          <ScreenPreviousButton labeled />
          <SettingsDrawerButton />
        </div>
      </div>
      <div className="flex h-[100dvh] items-center justify-center p-10">
        <div className="flex flex-col">
          <Markdown children={getTranslation("notice")} options={markdown_options} className="text-2xl" />
          <div className="flex flex-col mt-4 gap-4">
            <div>
              <a onClick={() => {
                setShowPrivacyNotice(true);
              }} className="text-blue-500 hover:text-blue-700 text-sm flex items-center gap-2">{getTranslation("handling")} <ArrowRight/></a>
            </div>
            <div>
              <ScreenNextButton />
            </div>
          </div>
        </div>
      </div>
      <SettingsDrawer />
      <ChatDrawer />
      <ChatButton />
    </AnimatedDiv>
  );
}