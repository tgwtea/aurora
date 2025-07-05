import { useLocale } from "../contexts/LocaleContext";
import { motion } from "motion/react"; 

export default function DownloadButton({ logo, label }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("constants");

  return (
    <motion.div whileHover={{
      scale: 1.05,
      y: -10
    }} className="flex items-center justify-center gap-8 rounded-xl bg-gray-300 dark:bg-gray-600 p-8 pb-5 pt-5 select-none">
      <img src={logo} alt={getTranslation("alts.logo", () => "")(label)} className="h-16" />
      <span className="text-3xl">{label}</span>
    </motion.div>
  );
}