"use client"

import { useContext } from "react";
import DesktopBody from "../../misc/DesktopBody";
import { BreakpointsContext } from "../../contexts/BreakpointsContext";
import STI from "../../misc/STI";
import { useLocale } from "../../contexts/LocaleContext";
import Markdown from "markdown-to-jsx";
import { markdown_options } from "@/lib/misc";

export default function DesktopResources() {
  const { calculateBPStyles } = useContext(BreakpointsContext);
  const { useTranslation } = useLocale();
  
  const getTranslation = useTranslation("desktop.resources");

  return (
    <DesktopBody>
      <div className="flex flex-col gap-20 pl-24 pr-24">
        <div className="flex flex-col gap-6">
          <span className="text-4xl">{getTranslation("title")}</span>
          <span className="text-xl font-normal">{getTranslation("description")}</span>
        </div>
        <div className={`grid ${calculateBPStyles({
          desktop: "grid-cols-2",
          default: "grid-cols-1"
        })} gap-x-10 gap-y-20`}>
          {getTranslation("infections", []).map((o, i) => {
            return (
              <STI key={i} position={(i + 1)} name={o.name} image={`/stis/${o.image}`} cause={o.cause} symptoms={o.symptoms} treatable={o.treatable} flipped={(i % 2) != 0} />
            );
          })}
        </div>
        <span className="text-xs text-center text-gray-400">
          <Markdown children={getTranslation("copyright")} options={markdown_options} />
        </span>
      </div>
    </DesktopBody>
  );
}