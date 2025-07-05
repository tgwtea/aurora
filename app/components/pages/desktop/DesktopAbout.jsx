"use client"

import DesktopBody from "../../misc/DesktopBody";
import TeamMember from "../../misc/TeamMember";
import { useLocale } from "../../contexts/LocaleContext";
import { useContext } from "react";
import { BreakpointsContext } from "../../contexts/BreakpointsContext";

export default function DesktopAbout() {
  const { useTranslation } = useLocale();
  const { booleans } = useContext(BreakpointsContext);

  const getTranslation = useTranslation("desktop.about");

  const members = [
    <TeamMember key="guan" name="Guan Wei Tan" image="guan" />,
    <TeamMember key="elmer" name="Elmer Eng" image="elmer" crown />,
    <TeamMember key="yan" name="Yan Hui Tok" image="yan" />
  ];

  return (
    <DesktopBody>
      <div className="flex justify-center w-full">
        <div className="flex items-center justify-center pl-24 pr-24 max-w-3/4">
          <div className="flex flex-col items-center gap-10 text-center">
            <span className="text-4xl">{getTranslation("title")}</span>
            <div className={`flex ${(booleans.width.tablet && booleans.orientation.portrait) ? "flex-col" : "items-center gap-12"} mt-10 select-none`}>
              {(booleans.width.tablet && booleans.orientation.portrait) ? [members[1], members[0], members[2]] : [members[0], members[1], members[2]]}
            </div>
            <span className="text-xl font-normal">{getTranslation("description")}</span>
          </div>
        </div>
      </div>
    </DesktopBody>
  );
}