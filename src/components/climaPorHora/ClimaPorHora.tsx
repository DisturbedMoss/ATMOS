/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import CardClima from "../cardClima/CardClima";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type CardClimaPorHoraProps = {
  mostrarClimaDia: any;
};

const ClimaPorHora = ({ mostrarClimaDia }: CardClimaPorHoraProps) => {
  // const timezone = mostrarClimaDia?.timezone ?? "UTC";

  const [clima, setClima] = useState<Array<any>>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [hora, setHora] = useState(new Date());

  function scrollTo(index: number) {
    emblaApi?.scrollTo(index);
  }

  useEffect(() => {
    if (!emblaApi || clima.length === 0) return;

    const interval = setInterval(() => {
        setHora(new Date());
      }, 1000);

    const horaLocal = Number(hora.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      hour12: false,
      timeZone: mostrarClimaDia?.timezone,
    }).slice(0, 2) );

    const index = clima.findIndex((e) => {
      const horaItem = Number(e.data.split("T")[1].slice(0, 2));
      return horaItem === horaLocal;
    });

    if (index !== -1) {
      emblaApi.scrollTo(index);
    }

    return () => clearInterval(interval);
  }, [emblaApi, clima, mostrarClimaDia?.timezone]);

  useEffect(() => {
		if (!emblaApi) return

		const updateIndex = () => {
			setSelectedIndex(emblaApi.selectedScrollSnap()) 
		}

		setSlidesCount(emblaApi.scrollSnapList().length)

		emblaApi.on("select", updateIndex)

		updateIndex()

		return () => {
			emblaApi.off("select", updateIndex)
		}
	}, [emblaApi])

  useEffect(() => {
    const dados = mostrarClimaDia?.climaDia;
    if (!dados?.time || !Array.isArray(dados.time)) return;

    const hoje = dados.time[0].split("T")[0];

    const horas = dados.time
      .map((hora: string, i: number) => ({
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
                <div className="embla__slide flex-none w-[20%] flex-col px-5">
                  <CardClima key={index} tipo={1} mostrarClimaDia={hora} />
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClimaPorHora;
