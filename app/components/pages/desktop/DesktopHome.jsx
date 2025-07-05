import DesktopBody from "../../misc/DesktopBody";
import { animated, useTransition } from "@react-spring/web";
import { useContext, useEffect, useState } from "react";
import { useLocale } from "../../contexts/LocaleContext";
import Markdown from "markdown-to-jsx";
import { BreakpointsContext } from "../../contexts/BreakpointsContext";
import { Table, TableBody, TableRow, TableCell, TableColumn, TableHeader, getKeyValue } from "@heroui/react";
import { useTheme } from "next-themes";
import Sponsor from "../../misc/Sponsor";
import STIRate from "../../misc/STIRate";
import STIStep from "../../misc/STIStep";
import STICard from "../../misc/STICard";
import DownloadButton from "../../misc/DownloadButton";
import { markdown_options } from "@/lib/misc";
import classNames from "classnames";
import NeedleSection from "../../misc/NeedleSection";
import Benchmark from "../../misc/Benchmark";
import omit from "object.omit";

export default function DesktopHome() {
  const { calculateBPStyles, calculateORStyles, booleans } = useContext(BreakpointsContext);
  const { useTranslation } = useLocale();
  const { theme } = useTheme();

  const getTranslation = useTranslation("desktop.home");
  const getConstantTranslation = useTranslation("constants");

  const texts = getTranslation("heading.adjectives");
  const [curr_text, setCurrText] = useState(0);

  const transitions = useTransition(texts[curr_text], {
    config: { duration: 2000 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  function generateRandomText(current) {
    const random_index = Math.floor(Math.random() * texts.length);

    return (random_index == current) ? generateRandomText(current) : random_index;
  }

  useEffect(() => {
    const int = setInterval(() => {
      const random_text = generateRandomText(curr_text);

      setCurrText(random_text);
    }, 3000);

    return () => clearInterval(int);
  }, [curr_text, texts]);

  const sponsors = [{
    name: "Vercel",
    url: "https://vercel.com/",
    logo: (theme == "dark" ? "/sponsors/vercel-light.svg" : "/sponsors/vercel-dark.svg")
  }, {
    name: "CURE Drug Repurposing Collaboratory",
    url: "https://c-path.org/",
    logo: "/sponsors/cdrc.png"
  }, {
    name: "CURE ID",
    url: "https://cure.ncats.io/",
    logo: "/sponsors/cureid.png"
  }, {
    name: "Action for AIDS",
    url: "https://afa.org.sg/",
    logo: "/sponsors/afa.png"
  }, {
    name: "NVIDIA",
    url: "https://www.nvidia.com/",
    logo: "/sponsors/nvidia.png"
  }, {
    name: "Singapore Health Services",
    url: "https://www.singhealth.com.sg/",
    logo: "/sponsors/sing.png"
  }, {
    name: "Sahlgrenska Global Health Hackathon",
    url: "https://www.sahlgrenskasciencepark.se/events-calendar/event-page-sahlgrenska-global-health-hackathon",
    logo: "/sponsors/sghh.png"
  }];

  const Icon = ({ icon, text }) => {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={`/icons/${icon}.png`} className="h-6" alt={getConstantTranslation("alts.icon", () => "")(icon)} />
        <span className="text-sm">{text}</span>
      </div>
    );
  };

  const Yes = (text) => <Icon icon="yes" text={text} />;
  const No = <Icon icon="no" />;
  
  const columns = [{
    key: "blank",
    label: ""
  }, {
    key: "aurora",
    label: <img src="/companies/aurora.png" alt={getConstantTranslation("alts.logo", () => "")("Aurora")} className="max-h-32 p-4" />
  }, {
    key: "hehealth",
    label: <img src="/companies/hehealth.png" alt={getConstantTranslation("alts.logo", () => "")("HeHealth")} className="max-h-32 p-4" />
  }, {
    key: "preventx",
    label: <img src="/companies/preventx.png" alt={getConstantTranslation("alts.logo", () => "")("Preventx.")} className="max-h-24 p-4" />
  }, {
    key: "wisp",
    label: <img src="/companies/wisp.png" alt={getConstantTranslation("alts.logo", () => "")("Wisp")} className="max-h-32 p-4" />
  }, {
    key: "loveyourself",
    label: <img src="/companies/loveyourself.png" alt={getConstantTranslation("alts.logo", () => "")("LoveYourself")} className="max-h-32 p-4" />
  }];
  
  const rows = [{
    key: 1,
    blank: getTranslation("benchmarking.rows.education"),
    aurora: Yes(getTranslation("benchmarking.yes.assistant")),
    hehealth: Yes(),
    preventx: No,
    wisp: Yes(),
    loveyourself: No
  }, {
    key: 2,
    blank: getTranslation("benchmarking.rows.scanning"),
    aurora: Yes(getTranslation("benchmarking.yes.device")),
    hehealth: Yes(),
    preventx: No,
    wisp: No,
    loveyourself: No
  }, {
    key: 3,
    blank: getTranslation("benchmarking.rows.delivery"),
    aurora: Yes(getTranslation("benchmarking.yes.anonymous")),
    hehealth: No,
    preventx: Yes(),
    wisp: No,
    loveyourself: Yes()
  }, {
    key: 4,
    blank: getTranslation("benchmarking.rows.support"),
    aurora: Yes(getTranslation("benchmarking.yes.teleconsults")),
    hehealth: No,
    preventx: No,
    wisp: No,
    loveyourself: Yes()
  }, {
    key: 5,
    blank: getTranslation("benchmarking.rows.matching"),
    aurora: Yes(getTranslation("benchmarking.yes.specialist")),
    hehealth: No,
    preventx: No,
    wisp: Yes(),
    loveyourself: No
  }, {
    key: 6,
    blank: getTranslation("benchmarking.rows.community"),
    aurora: Yes(getTranslation("benchmarking.yes.forum")),
    hehealth: No,
    preventx: No,
    wisp: No,
    loveyourself: Yes()
  }];

  const mapBenchmark = (ignore) => (element) => omit(element, ignore);
  const filterBenchmark = (ignore) => (element) => !ignore.includes(element.key);

  const first_table = ["preventx", "wisp", "loveyourself"];
  const second_table = ["aurora", "hehealth"];

  return (
    <DesktopBody>
      <div className={`flex items-center justify-center gap-12 ${(booleans.width.tablet) ? "flex-col gap-4" : ""}`}>
        <div className="flex flex-col gap-8 max-w-2xl">
          <span className="text-6xl font-Normal leading-14">{getTranslation("heading.text")} {transitions((style, item) => {
            return (
              <animated.span style={style} className="absolute ml-6 font-bold text-blue-400">
                {item}
              </animated.span>
            );
          })}</span>
          <Markdown children={getTranslation("heading.subtitle")} className="font-normal text-lg" />
        </div>
        <img src="/screenshot.png" alt={getConstantTranslation("alts.photo", () => "")(getConstantTranslation("alts.splash"))} className={`w-48 rotate-3 ${(theme == "dark") ? "screenshot-dark" : "screenshot-light"}`} />
      </div>
      <div className={classNames("flex flex-col gap-6", {
        "mt-6": booleans.width.tablet
      })}>
        <div className="text-center">
          <span className="text-gray-400">{getTranslation("heading.partners")}</span>
        </div>
        <div className={`flex items-center justify-center gap-12 ${(booleans.width.tablet) ? "flex-wrap pl-10 pr-10" : ""}`}>
          {sponsors.map((s) => {
            return <Sponsor key={s.name} data={s} />;
          })}
        </div>
        <div className="flex justify-center w-full mt-15">
          <div className="flex flex-col gap-8 text-center mt-15 max-w-3/4">
            <div className="flex flex-col gap-2 text-center">
              <span className="text-4xl">{getTranslation("sti.title")}</span>
              <span className="text-xl">{getTranslation("sti.subtitle")}</span>
            </div>
            <div className="flex flex-col gap-2 text-left">
              {getTranslation("sti.causes", []).map((c, i) => {
                return (
                  <span className="text-xl" key={i}>• <Markdown children={c} options={markdown_options} /></span>
                );
              })}
            </div>
            <span className="text-xl">
              <Markdown children={getTranslation("sti.consequences")} options={markdown_options} />
            </span>
            <div className={`grid ${(booleans.width.tablet) ? "grid-cols-1" : "grid-cols-3"} gap-8 text-left`}>
              <STIRate rate="7.7x" logo="/icons/brain.png" text={getTranslation("sti.rates.gono.text")} extra={getTranslation("sti.rates.gono.extra")} />
              <STIRate rate="10x" logo="/icons/skull.png" text={getTranslation("sti.rates.late.text")} />
              <STIRate rate="60-90%" logo="/icons/bacteria.png" text={getTranslation("sti.rates.contract.text")} />
            </div>
            <span className="text-xl">
              <Markdown children={getTranslation("sti.siloed")} options={markdown_options} />
            </span>
            <span className="text-xl">{getTranslation("sti.separately")}</span>
            <div className="flex flex-col gap-2">
              <span className="text-2xl">{getTranslation("sti.result")}</span>
              <span className="text-3xl text-red-400">{getTranslation("sti.fragmented")}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-15">
          <div className="flex flex-col gap-8 text-center mt-15 max-w-3/4">
            <span className="text-4xl">{getTranslation("bystep.title")}</span>
            <span className="text-xl">{getTranslation("bystep.subtitle")}</span>
          </div>
        </div>
        <div className={`grid ${calculateBPStyles({
          tablet: calculateORStyles({
            portrait: "grid-cols-1",
            landscape: "grid-cols-2"
          }),
          laptop: "grid-cols-2",
          default: "grid-cols-3"
        })} gap-y-20 mt-15 pr-20 pl-20 select-none`}>
          {getTranslation("bystep.steps", []).map((s, i) => {
            return (
              <STIStep key={i} number={(i + 1)} image={`/steps/${(i + 1)}.png`} title={s.title} text={s.text} />
            );
          })}
        </div>
        <div className="flex justify-center w-full mt-15">
          <div className="flex flex-col gap-8 max-w-3/4">
            <div className="flex flex-col gap-8 text-center">
              <span className="text-4xl">{getTranslation("benchmarking.title")}</span>
              <span className="text-xl">{getTranslation("benchmarking.subtitle")}</span>
            </div>
            {(!booleans.width.tablet) ? (
              <Benchmark columns={columns} rows={rows} label={getConstantTranslation("labels.comparison", " ")} />
            ) : (
              <>
                <Benchmark columns={columns.filter(filterBenchmark(first_table))} rows={rows.map(mapBenchmark(first_table))} label={getConstantTranslation("labels.comparison", " ")} />
                <Benchmark columns={columns.filter(filterBenchmark(second_table))} rows={rows.map(mapBenchmark(second_table))} label={getConstantTranslation("labels.comparison", " ")} />
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center w-full mt-15">
          <div className="flex flex-col gap-8 max-w-3/4">
            <div className="flex flex-col gap-8 text-center">
              <span className="text-4xl">{getTranslation("empowerment.title")}</span>
              <span className="text-xl">{getTranslation("empowerment.subtitle")}</span>
            </div>
            <div className={`grid ${(booleans.width.tablet) ? "grid-cols-1" : "grid-cols-2"} gap-4`}>
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-8">
                  <img src="/icons/hug.png" alt={getConstantTranslation("alts.icon", () => "")("hug")} className="h-32" />
                  <span className="text-2xl">{getTranslation("empowerment.empathy.title")}</span>
                </div>
                {getTranslation("empowerment.empathy.list", []).map((c, i) => {
                  return (
                    <span className="text-xl font-normal" key={i}>• {c}</span>
                  );
                })}
              </div>
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-8">
                  <img src="/icons/bulb.png" alt={getConstantTranslation("alts.icon", () => "")("bulb")} className="h-22" />
                  <span className="text-2xl">{getTranslation("empowerment.difference.title")}</span>
                </div>
                {getTranslation("empowerment.difference.list", []).map((c, i) => {
                  return (
                    <span className="text-xl font-normal" key={i}><span className="font-bold">• {c.bold}:</span> {c.normal}</span>
                  );
                })}
              </div>
            </div>
            <div className="p-8">
              <div className={`grid ${(booleans.width.tablet) ? "grid-cols-1" : "grid-cols-3"} gap-8 text-black select-none`}>
                {getTranslation("empowerment.cards", []).map((c, i) => {
                  return (
                    <STICard key={i} title={c.title} features={c.features} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-15">
          <div className="flex flex-col gap-8 max-w-3/4">
            <div className="flex flex-col gap-8 text-center">
              <span className="text-4xl">{getTranslation("reimagining.title")}</span>
              <span className="text-xl">{getTranslation("reimagining.subtitle")}</span>
            </div>
            <div className={`grid ${(booleans.width.tablet) ? "grid-cols-1 gap-10 text-center content-center" : "grid-cols-2"}`}>
              <div className={`flex flex-col ${(booleans.width.tablet) ? "items-center" : "items-start"} gap-4`}>
                <div className="flex items-center gap-8">
                  <img src="/icons/thinking.png" alt={getConstantTranslation("alts.icon", () => "")("thinking")} className="h-22" />
                  <span className="text-2xl">{getTranslation("reimagining.building.title")}</span>
                </div>
                {getTranslation("reimagining.building.list", []).map((c, i) => {
                  return (
                    <span className={classNames("text-xl font-normal", {
                      "mt-4": (i == 0)
                    })} key={i}>• {c}</span>
                  );
                })}
                <div className="flex flex-col gap-2 mt-8">
                  <span className="text-xl">{getTranslation("reimagining.building.tackling")}</span>
                  <span className="text-2xl text-blue-300">{getTranslation("reimagining.building.demands")}</span>
                </div>
              </div>
              <div className={`flex flex-col ${(booleans.width.tablet) ? "items-center" : "items-start"} gap-4`}>
                <div className="flex justify-center items-center gap-8">
                  <img src="/icons/stats.png" alt={getConstantTranslation("alts.icon", () => "")("stats")} className="h-22" />
                  <div className="flex flex-col">
                    <div className="flex items-end gap-4">
                      <span className="text-2xl">{getTranslation("reimagining.needle.title.how")}</span>
                      <img src="/companies/aurora.png" alt={getConstantTranslation("alts.logo", () => "")("Aurora")} className="h-12" />
                      <span className="text-2xl">{getTranslation("reimagining.needle.title.moves")}</span>
                    </div>
                    <span className="text-2xl">{getTranslation("reimagining.needle.title.rest")}</span>
                  </div>
                </div>
                {getTranslation("reimagining.needle.sections", []).map((s, i) => {
                  return <NeedleSection key={i} title={s.title} text={s.text} icon={s.icon} inside={s.inside} />;
                })}
              </div>
            </div>
            <div className="flex justify-center w-full mt-15">
              <div className="flex flex-col gap-15 max-w-3/4">
                <div className="flex flex-col">
                  <span className="text-3xl text-center font-normal">{getTranslation("download.bringing")}</span>
                  <span className="text-3xl text-center">{getTranslation("download.skip")}</span>
                </div>
                <div className={`flex ${(booleans.width.tablet) ? "flex-col" : ""} items-center justify-center gap-8 font-normal`}>
                  <DownloadButton logo="/download/googleplay.svg" label={getTranslation("download.google")} />
                  <DownloadButton logo="/download/appstore.svg" label={getTranslation("download.app")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DesktopBody>
  );
}