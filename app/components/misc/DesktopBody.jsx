import { Button } from "@heroui/react";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AnimatedDiv from "./AnimatedDiv";
import Banner from "./Banner";
import { BreakpointsContext } from "../contexts/BreakpointsContext";
import { useLocale } from "../contexts/LocaleContext";
import DesktopSettings from "./DesktopSettings";

export default function DesktopBody({ children }) {
  const [current_path, setCurrentPath] = useState(false);
  const { booleans } = useContext(BreakpointsContext);
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("desktop.navigation");
  const getSettingsTranslation = useTranslation("mobile.constants.settings");

  const footer_data = [{
    path: "home",
    label: getTranslation("buttons.home")
  }, {
    path: "about",
    label: getTranslation("buttons.about")
  }, {
    path: "resources",
    label: getTranslation("buttons.resources")
  }, {
    path: "privacy",
    label: getTranslation("buttons.privacy")
  }];

  useLayoutEffect(() => {
    if (booleans.width.mobile) window.location.replace("/");
  }, [booleans]);

  useEffect(() => {
    setCurrentPath(window.location.pathname.replace(/\//g, ""));
  }, []);
  
  const available_buttons = footer_data.filter((d) => {
    if (d.path == "home" && (!current_path || current_path == "")) return false;

    return (current_path) ? d.path != current_path : true;
  });

  const mapButton = (data) => <Button key={data.path} size={(booleans.width.tablet) ? "sm" : "lg"} variant="light" color="default" as="a" href={(data.path != "home") ? `/${data.path}` : "/"}>{data.label}</Button>;

  const footer_buttons = available_buttons.map(mapButton);

  const navbar_buttons = [...available_buttons.filter((x) => x.path != "support").map(mapButton)];

  return (!booleans.width.mobile) ? (
    <AnimatedDiv className="flex flex-col gap-10" duration={1.5}>
      <div className="flex items-center w-full h-24 justify-between p-20">
        <Banner />
        <div className="flex items-center gap-4">
          {navbar_buttons}
        </div>
        <DesktopSettings />
      </div>
      {children}
      <div className="flex items-center w-full h-24 justify-between p-20">
        <Banner />
        <div className="flex items-center gap-4">
          {footer_buttons}
        </div>
        <DesktopSettings />
      </div>
    </AnimatedDiv>
  ) : (<></>);
}