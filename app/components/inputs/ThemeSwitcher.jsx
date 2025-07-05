"use client"

import { Switch } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLocale } from "../contexts/LocaleContext";

export default function ThemeSwitcher({ labeled, size }) {
  const [ mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("constants");

  useEffect(() => {
    setTheme(theme);
    setMounted(true);
  }, []);

  return (mounted) ? (
    <div className="flex items-center gap-4">
      <Switch isSelected={(theme == "dark")} color="secondary" size={(size) ? size : "md"} thumbIcon={({ isSelected }) => (isSelected) ? <Moon color="black" className="w-4" /> : <Sun className="w-4" />} aria-label={getTranslation(`theme.${theme}`, " ")} onValueChange={(isSelected) => (isSelected) ? setTheme("dark") : setTheme("light")} />     
      <span className="text-sm">
        {(labeled) ? getTranslation(`theme.${theme}`) : ""}
      </span>
    </div>
  ) : (<></>);
}