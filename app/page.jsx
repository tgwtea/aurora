"use client";

import { useContext } from "react";
import { BreakpointsContext } from "./components/contexts/BreakpointsContext";
import MobileContextProvider from "./components/contexts/MobileContext";
import MobileRouter from "./components/routers/MobileRouter";
import DesktopHome from "./components/pages/desktop/DesktopHome";

export default function Home() {
  const { booleans } = useContext(BreakpointsContext);

  return (
    <>
      {(booleans.width.mobile) ? (
        <MobileContextProvider>
          <MobileRouter />
        </MobileContextProvider>
      ) : (booleans.width.big || booleans.width.tablet) ? (
        <DesktopHome />
      ) : ""}
    </>
  );
}