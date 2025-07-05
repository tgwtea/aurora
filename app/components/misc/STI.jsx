import { useLocale } from "../contexts/LocaleContext";

export default function STI({ position, name, image, cause, symptoms, treatable, flipped }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("constants");

  return (
    <div className={`flex items-center gap-10 ${(flipped) ? "flex-row-reverse" : ""}`}>
      <img src={image} alt={getTranslation("alts.sti", () => "")(name)} className="rounded-full w-64 h-64 object-cover" />
      <div className={`flex flex-col gap-4 ${(flipped) ? "text-right" : ""}`}>
        <span className="text-3xl">{position}. {name}</span>
        <span className="text-xl font-normal">{getTranslation("labels.caused")}: {cause}</span>
        <span className="text-xl font-normal">{getTranslation("labels.symptoms")}: {symptoms}</span>
        <span className="text-xl font-normal">{getTranslation("labels.treatable")}: {treatable}</span>
      </div>
    </div>
  );
}