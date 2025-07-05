import { motion } from "motion/react";
import { useLocale } from "../contexts/LocaleContext";

export default function TeamMember({ image, name, crown }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("constants");

  return (
    <motion.div whileHover={{
      rotate: "1deg",
      scale: 1.05,
      y: -5
    }} className={`flex flex-col items-center gap-4 ${(!crown) ? "mt-10" : ""}`}>
      <div className="relative">
        <img src={`/team/${image}.jpg`} alt={getTranslation("alts.photo", () => "")(name)} className="w-40 h-40 rounded-full" />
        {(crown) ? <img src="/icons/crown.png" alt={getTranslation("alts.photo", () => "")("crown")} className="absolute w-28 h-28 bottom-[8.1rem] left-6" /> : ""}
      </div>
      <span className="text-2xl">{name}</span>
    </motion.div>
  );
}