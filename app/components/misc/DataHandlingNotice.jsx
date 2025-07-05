import { useLocale } from "../contexts/LocaleContext";

export default function DataHandlingNotice({ big, small, title }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("handling");

  return (
    <>
      <span className={(title) ? title : big}>{getTranslation("title")}</span>
      <span className={`${small ?? ""} font-normal`}>{getTranslation("description")}</span>
      {getTranslation("clauses", []).map((c, i) => {
        return (
          <div key={i} className="flex flex-col gap-6">
            <span className={big}>{(i + 1)}. {c.title}</span>
            {(c.text) ? <span className={`${small ?? ""} font-normal`}>{c.text}</span> : ""}
            {(c.texts) ? c.texts.map((t, ti) => <span key={`t${ti}`} className={`${small ?? ""} font-normal`}>{t}</span>) : ""}
            {(c.list) ? (
              <ul className={`${small ?? ""} font-normal`}>
                {c.list.map((l, _li) => <li key={`l${_li}`}>- {l}</li>)}
              </ul>
            ) : ""}
          </div>
        );
      })}
    </>
  );
}