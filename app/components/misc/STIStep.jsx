import { motion } from "motion/react";
import { useLocale } from "../contexts/LocaleContext";

export default function STIStep({ number, image, title, text }) {
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("constants");

  return (
    <motion.div whileHover={{
      scale: 1.05,
      y: -5
    }} className="flex justify-center w-full">
      <div className="flex flex-col items-center text-center gap-4 relative max-w-md">
        <img src={image} alt={getTranslation("alts.icon", () => "")(title)} className="h-32" />
        <span className="text-5xl font-bold absolute top-5 left-5">{number}</span>
        <span className="text-2xl">{title}</span>
        <span className="text-lg font-Normal">{text}</span>
      </div>
    </motion.div>
  );
}