import { useContext } from "react";
import { MobileContext } from "../contexts/MobileContext";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "../contexts/LocaleContext";

export default function ScreenPreviousButton({ labeled, extra, callback }) {
  const { current_page, setCurrentPage, total_pages } = useContext(MobileContext);
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.constants");

  return (
    <span className="flex items-center gap-4" onClick={async () => {
      if (!callback) {
        if (extra) await extra();
      
        if (current_page > 0 && current_page < total_pages) setCurrentPage((c) => c - 1);
      } else callback();
    }}>
      <ArrowLeft />
      {(labeled) ? getTranslation("back") : ""}
    </span>
  );
}