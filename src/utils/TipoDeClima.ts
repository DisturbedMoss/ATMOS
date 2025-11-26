export const getTipoDeClima = (codigo: number): number => {
  switch (true) {
    case codigo == 0: //Céu Limpo
      return 0;

    case codigo >= 1 && codigo <= 3: //Nublado
      return 1;

    case codigo >= 45 && codigo <= 48: //Neblina
      return 2;

    case codigo >= 51 && codigo <= 67: //Chuva
      return 3;

    case codigo >= 71 && codigo <= 77: //Neve
      return 4;

    case codigo >= 80 && codigo <= 82: //Chuva com Raio
      return 5;

    case codigo >= 85 && codigo <= 86: //Neve Forte
      return 6;

    case codigo >= 95 && codigo <= 99: //Tempestade
      return 7;

    default:
      return 8; //Codigo climático inexistente
  }
};

export const getBackground = (codigo: number, hora: number): string => {
  switch (true) {
    case codigo == 0 || codigo == 8 || (codigo == 5 && hora >= 5 && hora < 18): //Céu Limpo dia
      return "/AppClimaDia.jpg";

    case codigo == 0 || codigo == 8 || (codigo == 5 && hora >= 18 && hora < 5): //Céu Limpo noite
      return "/AppClimaNoite.jpg";

    case codigo == 1 && hora >= 5 && hora < 18: //Nublado dia
      return "/AppClimaDia.jpg";

    case codigo == 1 && hora >= 18 && hora < 5: //Nublado noite
      return "/AppClimaNoite.jpg";

    case codigo == 2 && hora >= 5 && hora < 18: //Neblina dia
      return "/AppClimaDiaNevoa.jpg";

    case codigo == 2 && hora >= 18 && hora < 5: //Neblina noite
      return "/AppClimaNoiteNevoa.jpg";

    case codigo == 3 && hora >= 5 && hora < 18: //Chuva dia
      return "/AppClimaDiaChuva.png";

    case codigo == 3 && hora >= 18 && hora < 5: //Chuva noite
      return "/AppClimaNoiteChuva.png";

    case codigo == 4 || (codigo == 6 && hora >= 5 && hora < 18): //Neve Limpo dia
      return "/AppClimaNeveDia.jpg";

    case codigo == 4 || (codigo == 6 && hora >= 18 && hora < 5): //Neve Limpo noite
      return "/AppClimaNeveNoite.jpg";

    case codigo == 7 && hora >= 5 && hora < 18: //Tempestade dia
      return "/AppClimaDiaVento.jpg";

    case codigo == 7 && hora >= 18 && hora < 5: //Tempestade noite
      return "/AppClimaNoiteNevoa.jpg";

    default:
      return "/AppClimaDia.jpg";
  }
};
// <Sun size={32} />
export const getIcone = (codigo: number, hora: number): string => {
  switch (true) {
    case codigo == 0 || codigo == 8 || (codigo == 5 && hora >= 5 && hora < 18): //Céu Limpo dia
      return "SunIcon";

    case codigo == 0 || codigo == 8 || (codigo == 5 && hora >= 18 && hora < 5): //Céu Limpo noite
      return "MoonIcon";

    case codigo == 1 && hora >= 5 && hora < 18: //Nublado dia
      return "SunIcon";

    case codigo == 1 && hora >= 18 && hora < 5: //Nublado noite
      return "MoonIcon";

    case codigo == 2: //Neblina dia
      return "CloudFogIcon";

    case codigo == 3: //Chuva dia
      return "CloudRainIcon";

    case codigo == 4 || codigo == 6: //Neve Limpo dia
      return "CloudSnowIcon";

    case codigo == 7: //Tempestade dia
      return "WindIcon";

    default:
      return "SunIcon";
  }
};

export const getDescricaoClima = (codigo: number): string => {
  switch (codigo) {
    case 0:
      return "Céu limpo";

    case 1:
      return "Predominantemente claro";

    case 2:
      return "Parcialmente nublado";

    case 3:
      return "Nublado";

    case 45:
      return "Nevoeiro";

    case 48:
      return "Nevoeiro depositante";

    case 51:
      return "Chuvisco leve";

    case 53:
      return "Chuvisco moderado";

    case 55:
      return "Chuvisco intenso";

    case 56:
      return "Garoa congelante leve";

    case 57:
      return "Garoa congelante intensa";

    case 61:
      return "Chuva fraca";

    case 63:
      return "Chuva moderada";

    case 65:
      return "Chuva forte";

    case 66:
      return "Chuva congelante leve";

    case 67:
      return "Chuva congelante forte";

    case 71:
      return "Neve leve";

    case 73:
      return "Neve moderada";

    case 75:
      return "Neve intensa";

    case 77:
      return "Grãos de neve";

    case 80:
      return "Pancadas de chuva leves";

    case 81:
      return "Pancadas de chuva moderados";

    case 82:
      return "Pancadas de chuva fortes";

    case 85:
      return "Neve fraca";

    case 86:
      return "Neve forte";

    case 95:
      return "Tempestade";

    case 96:
      return "Tempestade com granizo leve";

    case 99:
      return "Tempestade com granizo forte";

    default:
      return "Clima desconhecido";
  }
};
