/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

export const buscarCidadeCoordenada = async (lat: number, lon: number) => {
  try {
    const resposta = await axios.get(
      "https://api.bigdatacloud.net/data/reverse-geocode-client",
      {
        params: {
          latitude: lat,
          longitude: lon,
          localityLanguage: "pt",
        },
      },
    );
    
    return {
      nome: resposta.data.city || resposta.data.locality,
      pais: resposta.data.countryName,
    };
  } catch (e) {
    console.log("Não foi possível buscar cidade pela coordenada");
    return null;
  }
};
