import { useContext } from "react";
import { MobileContext } from "../../contexts/MobileContext";
import ScreenPreviousButton from "../../buttons/ScreenPreviousButton";
import AnimatedDiv from "../../misc/AnimatedDiv";
import SettingsDrawerButton from "../../buttons/SettingsDrawerButton";
import SettingsDrawer from "../../misc/SettingsDrawer";
import { Button, Input } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import ChatDrawer from "../../misc/ChatDrawer";
import ChatButton from "../../buttons/ChatButton";
import EndSpacing from "../../misc/EndSpacing";
import { useLocale } from "../../contexts/LocaleContext";

export default function MobileResults() {
  const { anatomy, survey_result } = useContext(MobileContext);

  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.results");

  return (
    <AnimatedDiv>
      <div className="pt-10 pr-10 pl-10">
        <div className="flex items-center justify-between">
          <ScreenPreviousButton labeled />
          <SettingsDrawerButton />
        </div>
      </div>
      <div className="flex text-center items-center justify-center pr-10 pl-10 pt-8">
        <div className="flex flex-col gap-10">
          <span className="text-2xl">
            {(["penis", "vagina"].includes(anatomy) && survey_result > 25 && survey_result < 35)
              ? getTranslation("possible")
              : (anatomy == "both" && survey_result > 20 && survey_result < 35)
              ? getTranslation("possible")
              : (survey_result >= 35)
              ? getTranslation("attention")
              : getTranslation("unsure")
            }
          </span>
          <span className="text-lg font-normal">{getTranslation("subtitle")}</span>
          <div className="flex flex-col gap-4">
            <span className="text-xl">1. {getTranslation("steps.first.title")}</span>
            <div className="flex items-center gap-4">
              <span className="text-lg">{getTranslation("steps.first.subtitle")}</span> 
              <Input placeholder={getTranslation("steps.first.placeholder")} />
              <Button color="warning"><ArrowRight /></Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl">2. {getTranslation("steps.second.title")}</span>
            <div>
              <Button color="danger">{getTranslation("steps.second.button")} <ArrowRight /></Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl">3. {getTranslation("steps.third.title")}</span>
            <div>
              <Button color="secondary" as="a" href="https://www.google.com/maps/search/clinic/">{getTranslation("steps.third.button")} <ArrowRight /></Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl">4. {getTranslation("steps.fourth.title")}</span>
            <div>
              <Button color="success">{getTranslation("steps.fourth.button")} <ArrowRight /></Button>
            </div>
          </div>
          <EndSpacing />
        </div>
      </div>
      <SettingsDrawer />
      <ChatDrawer />
      <ChatButton />
    </AnimatedDiv>
  );
}