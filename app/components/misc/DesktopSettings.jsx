import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@heroui/react";
import { Cog, Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { useLocale } from "../contexts/LocaleContext.jsx";
import { useContext } from "react";
import { BreakpointsContext } from "../contexts/BreakpointsContext.jsx";
import ThemeSwitcher from "../inputs/ThemeSwitcher.jsx";

const LangSwitcher = dynamic(() => import("../inputs/LanguageSwitcher.jsx"), { ssr: false });

export default function DesktopSettings() {
  const { booleans } = useContext(BreakpointsContext);
  const { useTranslation } = useLocale();
  
  const getSettingsTranslation = useTranslation("mobile.constants.settings");

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">{(!booleans.width.tablet) ? (
          <>
            {getSettingsTranslation("title")}<Cog />
          </>
        ) : <Menu />}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label={getSettingsTranslation("title")} variant="faded" closeOnSelect={false}>
        <DropdownSection showDivider title={getSettingsTranslation("sections.appearance.title")}>
          <DropdownItem key="theme">
            <ThemeSwitcher size="lg" labeled />
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title={getSettingsTranslation("sections.localization.title")}>
          <DropdownItem key="language">
            <LangSwitcher fullSize />
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}