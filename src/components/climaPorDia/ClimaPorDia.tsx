import { useEffect, useState } from "react";
import CardClima from "../cardClima/CardClima";

type CardClimaPorDiaProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mostrarClima: any;
};

const ClimaPorDia = ({ mostrarClima }: CardClimaPorDiaProps) => {
  const [clima, setClima] = useState([]);

  useEffect(() => {
    if (!mostrarClima?.daily) return;

    const dias = mostrarClima.daily.time.map((dia: string, i: number) => ({
      data: dia,
      tempMin: mostrarClima.daily.temperature_2m_min[i],
      tempMax: mostrarClima.daily.temperature_2m_max[i],
      weathercode: mostrarClima.daily.weathercode[i],
    }));

    setClima(dias);
  },[mostrarClima]);
  
  return (
    <>
      <div className="w-8/10">
        <div className="px-10 py-3 backdrop-blur-lg bg-white/20 rounded-2xl">
          <p>Previsão nos próximos 7 dias</p>
          {clima.map((dia, index) =>(
            <CardClima key={index} tipo={2} mostrarClima={dia}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClimaPorDia;
