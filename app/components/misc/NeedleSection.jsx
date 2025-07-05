import { useLocale } from "../contexts/LocaleContext";

export default function NeedleSection({ title, text, icon, inside }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("constants");

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-4">
        <span className="text-2xl mt-4">• {title}</span>
        {(inside) ? (
          <div className="flex items-center gap-4">
            <span className="text-lg font-normal max-w-lg">{text}</span>
            {(inside) ? <img src={`/icons/${icon}.png`} alt={getTranslation("alts.icon", () => "")(icon)} className="h-22" /> : ""}
          </div>
        ) : (
          <span className="text-lg font-normal max-w-lg">{text}</span>
        )}
      </div>
      {(!inside) ? <img src={`/icons/${icon}.png`} alt={getTranslation("alts.icon", () => "")(icon)}  className="h-32" /> : ""}
    </div>
  );
}