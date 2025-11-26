/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Icones from "@phosphor-icons/react";
import { getDescricaoClima, getIcone, getTipoDeClima } from "../../utils/TipoDeClima";

type CardClimaProps = {
  tipo: number;
  mostrarClimaSemana?: any;
  mostrarClimaDia?: any;
};

const CardClima = ({ tipo, mostrarClimaSemana, mostrarClimaDia }: CardClimaProps) => {
  const hora = new Date(mostrarClimaDia?.data).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const horaString = hora.split(":")[0];
  const horaNumber = parseInt(horaString);

  //Repetição de codigo ->  LEMBRE DE CORRIGIR DEPOIS!!!
  const codigo = getTipoDeClima(mostrarClimaSemana?.weathercode);  
  const IconeEscolhido = getIcone(codigo, horaNumber);
  const IconeClima = (Icones as any)[IconeEscolhido]

  const codigoSemana = getTipoDeClima(mostrarClimaSemana?.weathercode);  
  const IconeEscolhidoSemana = getIcone(codigoSemana, horaNumber);
  const IconeClimaSemana = (Icones as any)[IconeEscolhidoSemana]

  const dia = new Date(mostrarClimaSemana?.data).toLocaleDateString("pt-BR", {
    weekday: "short",
  });

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
            <p>{dia}</p>
            <span>
              {IconeClimaSemana && (<IconeClimaSemana size={32} color="#0f1724" weight="bold" />)}
            </span>
            <p>{getDescricaoClima(mostrarClimaSemana.weathercode)}</p>
            <p>{mostrarClimaSemana.tempMin}º - {mostrarClimaSemana.tempMax}º</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardClima;
