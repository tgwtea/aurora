import { useContext } from "react";
import { MobileContext } from "../contexts/MobileContext";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { useLocale } from "../contexts/LocaleContext";

export default function ScreenNextButton({ label, color, isDisabled, extraHook, callback }) {
  const { current_page, setCurrentPage, total_pages } = useContext(MobileContext);
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.constants");

  return (
    <Button color={(color) ? color : "secondary"} isDisabled={isDisabled} onPress={() => {
      if (!callback) {
        if (current_page < total_pages) {
          setCurrentPage((c) => c + 1);
          if (extraHook) extraHook();
        }
      } else callback();
    }}>{(label) ? label : getTranslation("continue")} <ArrowRight /></Button>
  );
}