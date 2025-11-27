import { useEffect, useState } from "react";
import { motion } from "motion/react";

type ClimaAtualProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mostrarClima: any;
};

const ClimaAtual = ({ mostrarClima }: ClimaAtualProps) => {
  const [horaAtual, setHoraAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoraAtual(new Date().getHours());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getSaudacao = () => {
    if (horaAtual >= 5 && horaAtual < 12) return "Bom dia";
    if (horaAtual >= 12 && horaAtual < 18) return "Boa tarde";
    return "Boa noite";
  };

  const saudacao = getSaudacao();

  const [primeiraPalavra, segundaPalavra] = saudacao.split(" ");

  return (
    <>
      <div className="w-40 md:w-80">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 50 }}
          transition={{ duration: 1.25, ease: "easeOut", delay: 0.2 }}
          className="text-[#0F1724] w-40 md:w-80"
        >
          {mostrarClima ? (
            <>
              <div>
                <span className="font-semibold text-4xl md:text-6xl lg:text-7xl">
                  {mostrarClima.clima.temperature} ºC
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">{mostrarClima.cidade}</span>
                <span className="font-semibold">{mostrarClima.pais}</span>
              </div>
            </>
          ) : (
            <div className="flex flex-col w-40 md:w-80">
              <span className="font-semibold w-40 md:w-80 text-4xl md:text-6xl lg:text-7xl">{primeiraPalavra}</span>
              <span className="font-semibold w-40 md:w-80 text-4xl md:text-6xl lg:text-7xl">{segundaPalavra}</span>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default ClimaAtual;
