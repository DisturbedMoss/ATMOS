/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloudRainIcon } from "@phosphor-icons/react";
import * as Icones from "@phosphor-icons/react";
import { getIcone, getTipoDeClima } from "../../utils/TipoDeClima";

type CardClimaProps = {
  tipo: number;
  mostrarClimaSemana?: any;
  mostrarClimaDia?: any;
};

const CardClima = ({ tipo, mostrarClimaSemana, mostrarClimaDia }: CardClimaProps) => {
  const codigo = getTipoDeClima(mostrarClimaSemana?.weathercode);

  const hora = new Date(mostrarClimaDia?.data).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const horaString = hora.split(":")[0];
  const horaNumber = parseInt(horaString);
  
  const IconeEscolhido = getIcone(codigo, horaNumber);
  const IconeClima = (Icones as any)[IconeEscolhido]

  return (
    <>
      {tipo == 1 ? (
        <div className="w-1/5">
          <div className="flex flex-col justify-center items-center">
            <p>{horaNumber}</p>
            <span>
              {IconeClima && (<IconeClima size={32} color="#0f1724" weight="bold" />)}
            </span>
            <p className="flex">{mostrarClimaDia?.temperatura} ºC</p>
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
