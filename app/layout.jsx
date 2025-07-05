import { Providers } from "./providers";
import { cookies } from "next/headers";

import "./globals.css";
import "@fontsource/dela-gothic-one";
import '@fontsource/poppins';

export const metadata = {
  title: "Aurora",
  description: "The next-generation STI detector",
};

export default async function RootLayout({ children }) {
  const _cookies = await cookies();
  const token = _cookies.get("pizza");

  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers auth={token}>
            {children}
        </Providers>
      </body>
    </html>
  );
}
