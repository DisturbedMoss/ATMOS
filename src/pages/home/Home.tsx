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
  const [background, setBackground] = useState("");
  const [hora, setHora] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        setHora(new Date().getHours());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  useEffect(() => {
    setBackground(getBackground(mostrarClima?.clima?.weathercode, hora));  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mostrarClima]);

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat font-poppins"
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
              <DataAtual />
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
