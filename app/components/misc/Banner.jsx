import { useContext } from "react";
import { BreakpointsContext } from "../contexts/BreakpointsContext";
import { useLocale } from "../contexts/LocaleContext";

export default function Banner() {
  const { useTranslation } = useLocale();
  const { booleans } = useContext(BreakpointsContext);

  const getTranslation = useTranslation("constants");

  return (
    <a href="/">
      <img className="h-20" src={(booleans.width.tablet) ? "/favicon.png" : "/companies/aurora.png"} alt={getTranslation("alts.logo", () => "")("Aurora")} />
    </a>
  );
}