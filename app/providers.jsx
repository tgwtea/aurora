"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import BreakpointsContextProvider from "./components/contexts/BreakpointsContext";
import AuthContextProvider from "./components/contexts/AuthContext";
import LocaleContextProvider from "./components/contexts/LocaleContext";

export function Providers({ children, auth }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <BreakpointsContextProvider>
          <AuthContextProvider token={auth}>
            <LocaleContextProvider>
              {children}
            </LocaleContextProvider>
          </AuthContextProvider>
        </BreakpointsContextProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  )
}