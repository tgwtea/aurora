"use client"

import DataHandlingNotice from "../../misc/DataHandlingNotice";
import DesktopBody from "../../misc/DesktopBody";

export default function DesktopPrivacy() {
  return (
    <DesktopBody>
      <div className="flex items-center justify-center pl-24 pr-24">
        <div className="flex flex-col gap-6">
          <DataHandlingNotice big="text-3xl" small="text-xl" title="text-4xl" />
        </div>
      </div>
    </DesktopBody>
  );
}