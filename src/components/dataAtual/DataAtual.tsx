import { useEffect, useState } from "react";
import { motion } from "motion/react";

const DataAtual = () => {
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [diaAtual, setDiaAtual] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const horaFormatada = horaAtual.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDiaAtual(new Date());
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  const dataFormatada = diaAtual.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.75 }}
          className="text-[#0F1724]"
        >
          <div className="font-bold text-8xl text-[#faf9f6]">
            <span>{horaFormatada}</span>
          </div>
          <div className="font-semibold text-[#faf9f6] text-2xl">
            <span>{dataFormatada}</span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DataAtual;
