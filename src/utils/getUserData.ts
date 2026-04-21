/* eslint-disable @typescript-eslint/no-unused-vars */
import { getUserLocation } from "./getUserLocation";
import { buscarCidadeCoordenada } from "./buscarCidadeCoordenada";
import { carregarClimaAtual } from "../services/OpenMeteoService";

export const getUserData = async () => {
  try {
    const { lat, lon } = await getUserLocation();

    const cidade = await buscarCidadeCoordenada(lat, lon);

    const clima = await carregarClimaAtual(lat, lon);
    
    return {
      cidade,
      clima,
    };
  } catch (e) {
    console.error("Não foi possível pegar a localização do usuário");
    return null;
  }
};
