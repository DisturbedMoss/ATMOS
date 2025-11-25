/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ClimaAtual from "../../components/climaAtual/ClimaAtual";
import ClimaPorDia from "../../components/climaPorDia/ClimaPorDia";
import ClimaPorHora from "../../components/climaPorHora/ClimaPorHora";
import DataAtual from "../../components/dataAtual/DataAtual";
import { getBackground, getTipoDeClima } from "../../utils/TipoDeClima";

type HomeProps = {
  mostrarClima: any;
  mostrarClimaDia: any;
  mostrarClimaSemana: any;
};

const Home = ({ mostrarClima, mostrarClimaDia, mostrarClimaSemana }: HomeProps) => {
  const [iconeClima, setIconeClima] = useState(0);
  const [background, setBackground] = useState("");
  const [hora, setHora] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        setHora(new Date().getHours());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconeClima(getTipoDeClima(mostrarClima?.clima?.weathercode));
    }, 50000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setBackground(getBackground(mostrarClima?.clima?.weathercode, hora));  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mostrarClima]);

  return (
    <>
      <div className="h-screen bg-cover bg-center bg-no-repeat font-poppins"
           style={{
            backgroundImage: `url(${background})`
           }}
      >
        <div className="grid grid-cols-2 py-20 px-10">
          <div className="px-5 grid justify-between">
            <div>
              <ClimaAtual mostrarClima={mostrarClima} iconeClima={iconeClima} />
            </div>
            <div>
              <DataAtual />
            </div>
          </div>
          <div className="grid grid-rows-4 gap-3">
            <ClimaPorHora mostrarClimaDia={mostrarClimaDia} />
            <div className="row-span-3">
              <ClimaPorDia mostrarClimaSemana={mostrarClimaSemana} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
