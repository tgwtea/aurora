import { motion } from "motion/react";
import { useLocale } from "../contexts/LocaleContext";

export default function Sponsor({ data: { name, url, logo } }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("constants");

  return (
    <motion.a whileHover={{
      scale: 1.1,
      y: -5
    }} href={url} target="_blank">
      <img src={logo} alt={getTranslation("alts.logo", () => "")(name)} className={"h-20"} />
    </motion.a>
  );
}