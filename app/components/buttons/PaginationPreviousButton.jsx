import { ArrowLeft } from "lucide-react";
import { useLocale } from "../contexts/LocaleContext";

export default function PaginationPreviousButton({ labeled, current_chunk, total_chunks, moveHook }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.constants");

  return (
    <span className="flex items-center gap-4" onClick={() => {
      if (current_chunk > 0 && current_chunk < total_chunks) moveHook((c) => c - 1);
    }}>
      <ArrowLeft />
      {(labeled) ? getTranslation("back") : ""}
    </span>
  );
}