/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloudRainIcon } from "@phosphor-icons/react";

type CardClimaProps = {
  tipo: number;
  mostrarClimaSemana?: any;
  mostrarClimaDia?: any;
};

const CardClima = ({ tipo, mostrarClimaSemana, mostrarClimaDia }: CardClimaProps) => {
  return (
    <>
      {tipo == 1 ? (
        <div className="w-1/5">
          <div className="flex flex-col justify-center items-center">
            <p>Agora</p>
            <span>
              <CloudRainIcon size={32} color="#0f1724" weight="bold" />
            </span>
            <p className="flex">{mostrarClimaDia?.clima?.temperature} ºC</p>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex gap-5 justify-start items-center">
            <p>{mostrarClimaSemana.data}</p>
            <span>
              <CloudRainIcon size={32} color="#0f1724" weight="bold" />
            </span>
            <p>{mostrarClimaSemana.weathercode}</p>
            <p>{mostrarClimaSemana.tempMin}º - {mostrarClimaSemana.tempMax}º</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardClima;
