import AnimatedDiv from "../../misc/AnimatedDiv";
import ScreenNextButton from "../../buttons/ScreenNextButton";
import SettingsDrawerButton from "../../buttons/SettingsDrawerButton";
import SettingsDrawer from "../../misc/SettingsDrawer";
import ChatButton from "../../buttons/ChatButton";
import ChatDrawer from "../../misc/ChatDrawer";
import { useLocale } from "../../contexts/LocaleContext";

export default function MobileSplash() {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.splash");
  const getConstantTranslation = useTranslation("constants");

  return (
    <AnimatedDiv>
      <div className="header p-10">
        <div className="flex items-center justify-end">
          <SettingsDrawerButton />
        </div>
      </div>
      <div className="flex h-[100dvh] items-center justify-center">
        <div className="flex flex-col">
          <span className="text-4xl">{getTranslation("welcome")}</span>
          <img src="/companies/aurora.png" alt={getConstantTranslation("alts.logo", () => "")("Aurora")} className="w-48" />
          <div className="mt-4">
            <ScreenNextButton label={getTranslation("button")} color="warning" />
          </div>
        </div>
      </div>
      <SettingsDrawer/>
      <ChatDrawer />
      <ChatButton />
    </AnimatedDiv>
  );
}