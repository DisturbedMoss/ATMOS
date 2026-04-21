import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getUserData } from "../../utils/getUserData";

type ClimaAtualProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mostrarClima: any;
};

const ClimaAtual = ({ mostrarClima }: ClimaAtualProps) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      setUserData(data);
    };

    fetchData();
  }, []);

  const dados = userData;

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
                  <p className="text-shadow-md text-shadow-sky-50/30">
                    {mostrarClima.clima.temperature} ºC
                  </p>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold ">
                  <p className="text-shadow-md text-shadow-sky-50/30">
                    {mostrarClima.cidade}
                  </p>
                </span>
                <span className="font-semibold">
                  <p className="text-shadow-md text-shadow-sky-50/30">
                    {mostrarClima.pais}
                  </p>
                </span>
              </div>
            </>
          ) : dados ? (
            <>
              <div>
                <span className="font-semibold text-4xl md:text-6xl lg:text-7xl">
                  <p className="text-shadow-md text-shadow-sky-50/30">
                    {dados.clima?.temperature} ºC
                  </p>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold ">
                  <p className="text-shadow-md text-shadow-sky-50/30">
                    {dados.cidade?.nome}
                  </p>
                </span>
                <span className="font-semibold">
                  <p className="text-shadow-md text-shadow-sky-50/30">
                    {dados.cidade?.pais}
                  </p>
                </span>
              </div>
            </>
          ) : (
            <>
              <p>Carregando</p>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default ClimaAtual;
