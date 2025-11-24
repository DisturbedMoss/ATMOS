import { CloudRainIcon } from "@phosphor-icons/react";

type CardClimaProps = {
  tipo: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mostrarClima: any;
};

const CardClima = ({ tipo, mostrarClima }: CardClimaProps) => {
  return (
    <>
      {tipo == 1 ? (
        <div className="w-1/5">
          <div className="flex flex-col justify-center items-center">
            <p>Agora</p>
            <span>
              <CloudRainIcon size={32} color="#0f1724" weight="bold" />
            </span>
            <p className="flex">{mostrarClima?.clima?.temperature} ºC</p>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex gap-5 justify-start items-center">
            <p>{mostrarClima.data}</p>
            <span>
              <CloudRainIcon size={32} color="#0f1724" weight="bold" />
            </span>
            <p>{mostrarClima.weathercode}</p>
            <p>{mostrarClima.tempMin}º - {mostrarClima.tempMax}º</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardClima;
