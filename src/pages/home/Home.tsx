/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ClimaAtual from "../../components/climaAtual/ClimaAtual";
import ClimaPorDia from "../../components/climaPorDia/ClimaPorDia";
import ClimaPorHora from "../../components/climaPorHora/ClimaPorHora";
import DataAtual from "../../components/dataAtual/DataAtual";
import { getBackground } from "../../utils/TipoDeClima";

type HomeProps = {
  mostrarClima: any;
  mostrarClimaDia: any;
  mostrarClimaSemana: any;
};

const Home = ({ mostrarClima, mostrarClimaDia, mostrarClimaSemana }: HomeProps) => {
  const timezone = mostrarClimaDia?.timezone ?? "UTC";
  
  const [background, setBackground] = useState("");
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
      const interval = setInterval(() => {
        setHora(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [mostrarClimaDia?.timezone]);

  const horaNumber = Number( hora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone,
  }).slice(0, 2) );

  useEffect(() => {
    setBackground(getBackground(mostrarClima?.clima?.weathercode, horaNumber));  

  }, [mostrarClima, horaNumber]);

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat font-poppins flex justify-center items-center"
           style={{
            backgroundImage: `url(${background})`
           }}
      >
        <div className="container w-full grid md:grid-cols-2 grid-cols-1 pt-20 md:px-10 px-2 justify-center">
          <div className="px-5 grid justify-between w-screen max-w-[90%] md:max-w-[80%]">
            <div>
              <ClimaAtual mostrarClima={mostrarClima} />
            </div>
            <div>
              <DataAtual mostrarClimaDia={mostrarClimaDia} />
            </div>
          </div>
          <div className="grid place-items-center md:grid-rows-4 grid-rows-3 gap-3">
            <ClimaPorHora mostrarClimaDia={mostrarClimaDia} />
            <div className="md:row-span-3 row-span-2">
              <ClimaPorDia mostrarClimaSemana={mostrarClimaSemana} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
