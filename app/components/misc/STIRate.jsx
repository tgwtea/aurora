import { useLocale } from "../contexts/LocaleContext";

export default function STIRate({ rate, logo, text, extra }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("constants");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-8">
        <span className="text-6xl">{rate}</span>
        <img src={logo} alt={getTranslation("alts.icon", () => "")(text)} className="h-20 mb-2" />
      </div>
      <span className="text-xl font-normal">{text}</span>
      <span className="text-lg font-normal">{extra}</span>
    </div>
  );
}