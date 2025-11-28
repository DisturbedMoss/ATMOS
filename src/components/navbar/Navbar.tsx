/* eslint-disable @typescript-eslint/no-explicit-any */
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { buscarCidade } from "../../services/GeoCodingService";
import { carregarClimaAtual, carregarClimaDaSemana, carregarClimaDoDia } from "../../services/OpenMeteoService";

type NavbarProps = {
  onClimaCarregado: (clima: any) => void;
  onClimaDiaCarregado: (clima: any) => void;
  onClimaSemanaCarregado: (clima: any) => void;
};

const Navbar = ({ onClimaCarregado, onClimaDiaCarregado, onClimaSemanaCarregado }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cidade, setCidade] = useState("");

  const onButtonClick = () => {
    setIsSearchOpen((prev) => !prev);
  };

  async function buscarPorNome() {
    try {
      const dadosCidade = await buscarCidade(cidade);

      if (!dadosCidade) {
        alert("Cidade não encontrada");
        return;
      }

      const clima = await carregarClimaAtual(dadosCidade.lat, dadosCidade.lon);

      const climaDia = await carregarClimaDoDia(dadosCidade.lat, dadosCidade.lon);

      const climaSemana = await carregarClimaDaSemana(dadosCidade.lat, dadosCidade.lon);

      onClimaCarregado({
        cidade: dadosCidade.nome,
        pais: dadosCidade.pais,
        clima: clima,
      });
      onClimaDiaCarregado({
        climaDia: climaDia?.hourly,
        timezone: climaDia?.timezone,
      });
      onClimaSemanaCarregado({
        climaSemana: climaSemana,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      alert("Não foi possível buscar a Cidade");
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          buscarPorNome();
        }}
      >
        <div className="fixed top-0 left-0 z-20 backdrop-blur-lg bg-white/20 w-full">
          <div className="w-full flex justify-between">
            <div className="px-4 py-3">
              <p className="font-semibold text-2xl text-[#0F1724]">ATMOS</p>
            </div>
            <div className="flex px-4 py-3 items-center gap-2">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ width: "0px", x: 200 }}
                    animate={{ width: "200px", x: 0 }}
                    exit={{ width: "0px", x: 200 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    type="text"
                    placeholder="Escolha uma Cidade"
                    className="bg-[#faf9f6] w-0 min-w-0 inline-block rounded-md px-3 py-1 focus:outline-none focus:bg-[#e6e4e1] focus:shadow-md font-semibold text-md overflow-hidden"
                  />
                )}
              </AnimatePresence>
              {!isSearchOpen ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onButtonClick();
                  }}
                  className="cursor-pointer"
                >
                  <MagnifyingGlassIcon
                    size={24}
                    color="#0F1724"
                    weight="bold"
                  />
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={buscarPorNome}
                  className="cursor-pointer"
                >
                  <MagnifyingGlassIcon
                    size={24}
                    color="#0F1724"
                    weight="bold"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Navbar;
