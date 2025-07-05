import { motion } from "motion/react"; 

export default function STICard({ title, features }) {
  return (
    <motion.div whileHover={{
      rotate: "1deg",
      scale: 1.05,
      y: -10
    }} className="w-full rounded-xl p-1.5 bg-gradient-to-br from-[#ccd875] via-[#0cbcdc] to-[#44c4bc]">
      <div className={`flex flex-col h-full gap-4 rounded-lg p-8`}>
        <span className="text-2xl text-center">{title}</span>
        <div className="flex flex-col gap-2 font-normal">
          {features.map((f, i) => {
            return <span className="text-xl" key={i}>• {f}</span>;
          })}
        </div>
      </div>
    </motion.div>
  );
}