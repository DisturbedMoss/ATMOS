import axios from "axios";

const api = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
});

export const carregarClimaAtual = async (lat: number, lon: number) => {
  try {
    const resposta = await api.get("", {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true,
      },
    });

    return resposta.data.current_weather;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const carregarClimaDaSemana = async (lat: number, lon: number) => {
  try {
    const resposta = await api.get("", {
      params: {
        latitude: lat,
        longitude: lon,
        daily: "weather_code,temperature_2m_max,temperature_2m_min",
        timezone: "auto",
      },
    });
    
    return resposta.data.daily;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const carregarClimaDoDia = async (lat: number, lon: number) => {
  try {
    const resposta = await api.get("", {
      params: {
        latitude: lat,
        longitude: lon,
        hourly: "weather_code,temperature_2m",
        timezone: "auto",
      },
    });
    return {
      hourly: resposta.data.hourly,
      timezone: resposta.data.timezone,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
};
