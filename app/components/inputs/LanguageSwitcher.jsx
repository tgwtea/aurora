"use client"

import { Select, SelectItem } from "@heroui/react";
import { LocaleContext, useLocale } from "../contexts/LocaleContext";
import { useContext } from "react";
import { BreakpointsContext } from "../contexts/BreakpointsContext";

export default function LanguageSwitcher({ fullSize }) {
  const { language, languages, setLanguage } = useContext(LocaleContext);
  const { useTranslation } = useLocale();
  const { booleans } = useContext(BreakpointsContext);

  const getTranslation = useTranslation("constants");

  return (
    <Select selectedKeys={new Set([language])} disabledKeys={new Set([language])} placeholder={getTranslation("language")} className={(fullSize) ? "w-full" : "w-[8rem]"} onSelectionChange={(c) => setLanguage(c.currentKey)} aria-label={getTranslation("language", " ")} size={(booleans.width.tablet) ? "sm" : "md"}>
      {languages.map((l) => {
        return (
          <SelectItem key={l.value}>{l.label}</SelectItem>
        );
      })}
    </Select>
  );
}