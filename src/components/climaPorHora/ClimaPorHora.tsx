/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import CardClima from "../cardClima/CardClima";
import useEmblaCarousel from "embla-carousel-react";

type CardClimaPorHoraProps = {
  mostrarClimaDia: any;
};

const ClimaPorHora = ({ mostrarClimaDia }: CardClimaPorHoraProps) => {
  const [clima, setClima] = useState([]);

  const [emblaRef] = useEmblaCarousel();

  useEffect(() => {
    const dados = mostrarClimaDia?.climaDia;
    if (!dados?.time || !Array.isArray(dados.time)) return;

    const hoje = new Date().toISOString().split("T")[0]; //especifica dados de hoje

    const horas = dados.time
      .map((hora: number, i: number) => ({
        data: hora,
        temperatura: dados.temperature_2m[i],
        weathercode: dados.weather_code[i],
      }))
      .filter((e: any) => e.data.startsWith(hoje));

    setClima(horas);
  }, [mostrarClimaDia]);

  return (
    <>
      <div className="">
        <div className="px-10 py-3 w-100 sm:w-120 md:w-94 lg:w-120 backdrop-blur-lg bg-white/20 rounded-2xl overflow-hidden justify-between">
          <p className="font-semibold">Previsão nas próximas 24 horas</p>
          <div ref={emblaRef} className="embla__viewport overflow-hidden">
            <span className="embla__container flex flex-4/5">
              {clima.map((hora, index) => (
                <div className="embla__slide flex-none w-[20%] flex-col px-5"><CardClima key={index} tipo={1} mostrarClimaDia={hora} /></div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClimaPorHora;
