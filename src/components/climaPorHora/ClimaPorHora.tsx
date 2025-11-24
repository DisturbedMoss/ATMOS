import CardClima from "../cardClima/CardClima";

type CardClimaPorHoraProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mostrarClima: any;
};

const ClimaPorHora = ({ mostrarClima }: CardClimaPorHoraProps) => {
  return (
    <>
      <div className="w-8/10">
        <div className="px-10 py-3 backdrop-blur-lg bg-white/20 rounded-2xl">
          <p>Previsão nas próximas 24 horas</p>
          <span>
            <CardClima tipo={1} mostrarClima={mostrarClima}/>
          </span>
        </div>
      </div>
    </>
  );
};

export default ClimaPorHora;
