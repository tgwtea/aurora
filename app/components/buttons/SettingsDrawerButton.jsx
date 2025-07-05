import { Settings } from "lucide-react";
import { useContext } from "react";
import { MobileContext } from "../contexts/MobileContext";

export default function SettingsDrawerButton() {
  const { settingsOnOpen } = useContext(MobileContext);

  return (
    <div onClick={settingsOnOpen}>
      <Settings />
    </div>
  );
}