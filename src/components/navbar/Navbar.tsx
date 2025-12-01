/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { buscarCidade } from "../../services/GeoCodingService";
import {
  carregarClimaAtual,
  carregarClimaDaSemana,
  carregarClimaDoDia,
} from "../../services/OpenMeteoService";
import { Link } from "react-router-dom";

type NavbarProps = {
  onClimaCarregado: (clima: any) => void;
  onClimaDiaCarregado: (clima: any) => void;
  onClimaSemanaCarregado: (clima: any) => void;
};

const Navbar = ({
  onClimaCarregado,
  onClimaDiaCarregado,
  onClimaSemanaCarregado,
}: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cidade, setCidade] = useState("");

  const onButtonClick = (chave: number) => {
    if(chave === 1) setIsSearchOpen((prev) => !prev);
    
    if (!cidade.trim() && chave === 0) setIsSearchOpen((prev) => !prev);
  };

  async function buscarPorNome() {
    try {
      const dadosCidade = await buscarCidade(cidade);

      if (!dadosCidade) {
        if (cidade.trim()) alert("Cidade não encontrada");
          
        return;
      }

      const clima = await carregarClimaAtual(dadosCidade.lat, dadosCidade.lon);

      const climaDia = await carregarClimaDoDia(
        dadosCidade.lat,
        dadosCidade.lon
      );

      const climaSemana = await carregarClimaDaSemana(
        dadosCidade.lat,
        dadosCidade.lon
      );

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
      
      setCidade("");
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
              <p className="font-semibold text-2xl text-[#0F1724]"><Link to="/">ATMOS</Link></p>
            </div>
            <div className="flex px-4 items-center gap-2 overflow-hidden">
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

              <AnimatePresence mode="wait">
                {!isSearchOpen ? (
                  <motion.button
                    key="aberto-btn"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    exit={{y: 50}}
                    transition={{ duration: 0.10, ease: "easeOut" }}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      
                      onButtonClick(1);
                    }}
                    className="cursor-pointer"
                  >
                    <MagnifyingGlassIcon
                      size={24}
                      color="#0F1724"
                      weight="bold"
                    />
                  </motion.button>
                ) : (
                  <motion.button
                    key="fechado-btn"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    exit={{y: 50}}
                    transition={{ duration: 0.10, ease: "easeIn" }}
                    type="submit"
                    onClick={() => {
                      onButtonClick(0);
                    }}
                    className="cursor-pointer"
                  >
                    <XIcon size={24} color="#0F1724" weight="bold" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Navbar;
