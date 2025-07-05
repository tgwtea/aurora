import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { useLocale } from "../contexts/LocaleContext";

export default function PaginationNextButton({ current_chunk, total_chunks, moveHook, isDisabled }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.constants");

  return (
    <Button color={"secondary"} isDisabled={isDisabled} onPress={() => {
      if (current_chunk < (total_chunks - 1)) moveHook((c) => c + 1);
    }}>{getTranslation("continue")} <ArrowRight /></Button>
  );
}