import { useEffect, useState } from "react";
import CardClima from "../cardClima/CardClima";

type CardClimaPorHoraProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mostrarClimaDia: any;
};

const ClimaPorHora = ({ mostrarClimaDia }: CardClimaPorHoraProps) => {
  const [clima, setClima] = useState([]);

  useEffect(() => {
    const dados = mostrarClimaDia?.climaDia;
    if(!dados?.time || !Array.isArray(dados.time)) return;

    const horas = dados.time.map((hora: number, i: number) => ({
      data: hora,
      temperatura: dados.temperature_2m[i],
      weathercode: dados.weather_code[i],
    }));
    
    setClima(horas);
  }, [mostrarClimaDia]);

  return (
    <>
      <div className="w-8/10">
        <div className="px-10 py-3 backdrop-blur-lg bg-white/20 rounded-2xl">
          <p>Previsão nas próximas 24 horas</p>
          <span className="flex">
            {clima.map((hora, index) => (
              <CardClima key={index} tipo={1} mostrarClimaDia={hora}/>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default ClimaPorHora;
