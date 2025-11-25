import { useEffect, useState } from "react";
import CardClima from "../cardClima/CardClima";

type CardClimaPorDiaProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mostrarClimaSemana: any;
};

const ClimaPorDia = ({ mostrarClimaSemana }: CardClimaPorDiaProps) => {
  const [clima, setClima] = useState([]);

  useEffect(() => {
    const dados = mostrarClimaSemana?.climaSemana;
    if(!dados?.time || !Array.isArray(dados.time)) return;

    const dias = dados.time.map((dia: string, i: number) => ({
      data: dia,
      tempMin: dados.temperature_2m_min[i],
      tempMax: dados.temperature_2m_max[i],
      weathercode: dados.weather_code[i],
    }));

    setClima(dias);
  }, [mostrarClimaSemana]);
  
  return (
    <>
      <div className="w-8/10">
        <div className="px-10 py-3 backdrop-blur-lg bg-white/20 rounded-2xl">
          <p>Previsão nos próximos 7 dias</p>
          {clima.map((dia, index) =>(
            <CardClima key={index} tipo={2} mostrarClimaSemana={dia}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClimaPorDia;
