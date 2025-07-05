import { useContext } from "react";
import { MobileContext } from "../contexts/MobileContext";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Switch } from "@heroui/react";
import { Check, CheckCircle, Earth, Palette, Scan, Settings, X, XCircle } from "lucide-react";
import ThemeSwitcher from "../inputs/ThemeSwitcher";
import { useLocale } from "../contexts/LocaleContext";
import LanguageSwitcher from "../inputs/LanguageSwitcher";
import { useLocalStorage } from "react-use";

export default function SettingsDrawer() {
  const { settingsIsOpen, settingsOnOpenChange } = useContext(MobileContext);
  const { useTranslation } = useLocale();
  const [auto_delete, setAutoDelete] = useLocalStorage("auto_delete", false);

  const getTranslation = useTranslation("mobile.constants.settings");

  return (
    <Drawer isOpen={settingsIsOpen} onOpenChange={settingsOnOpenChange} size="xs">
      <DrawerContent>
        {(settingsOnClose) => (
          <>
            <DrawerHeader>
              <span className="flex items-center gap-4">
                <Settings />
                {getTranslation("title")}
              </span>
            </DrawerHeader>
            <DrawerBody className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <span className="flex items-center gap-4"><Palette />{getTranslation("sections.appearance.title")}</span>
                <ThemeSwitcher labeled />
              </div>
              <div className="flex flex-col gap-6">
                <span className="flex items-center gap-4"><Earth />{getTranslation("sections.localization.title")}</span>
                <LanguageSwitcher fullSize />
              </div>
              <div className="flex flex-col gap-6">
                <span className="flex items-center gap-4"><Scan />{getTranslation("sections.scans.title")}</span>
                <div className="flex items-center gap-4">
                  <Switch color="secondary" size="md" thumbIcon={({ isSelected }) => (isSelected) ? <Check color="black" className="w-4" /> : <X color="black" className="w-4" />} aria-label={getTranslation("sections.scans.delete", " ")} isSelected={auto_delete} onValueChange={(s) => setAutoDelete(s)} />
                  <span className="text-sm">{getTranslation("sections.scans.delete")}</span>
                </div>
              </div>
            </DrawerBody>
            <DrawerFooter>
              <Button color="danger" variant="light" onPress={settingsOnClose}>
                {getTranslation("close")}
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}