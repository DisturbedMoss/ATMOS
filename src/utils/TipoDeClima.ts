export const getTipoDeClima = (codigo: number): number => {
    switch (true) {
        case codigo == 0: //Céu Limpo
            return 0;

        case codigo >= 1 && codigo <= 3://Nublado
            return 1;

        case codigo >= 45 && codigo <= 48://Neblina
            return 2;

        case codigo >= 51 && codigo <= 67://Chuva
            return 3;

        case codigo >= 71 && codigo <= 77://Neve
            return 4;

        case codigo >= 80 && codigo <= 82://Chuva com Raio
            return 5;

        case codigo >= 85 && codigo <= 86://Neve Forte
            return 6;

        case codigo >= 95 && codigo <= 99://Tempestade
            return 7;

        default:
            return 8;//Codigo climático inexistente
    }
}

export const getBackground = (codigo: number, hora: number): string => {
    switch (true) {
      case codigo == 0 || codigo == 8 || codigo == 5 && hora >= 5 && hora < 18://Céu Limpo dia
        
        return "/AppClimaDia.jpg";

      case codigo == 0 || codigo == 8 || codigo == 5 && hora >= 18 && hora < 5://Céu Limpo noite
      
        return "/AppClimaNoite.jpg";

      case codigo == 1 && hora >= 5 && hora < 18://Nublado dia
      
        return "/AppClimaDia.jpg";

      case codigo == 1 && hora >= 18 && hora < 5://Nublado noite
      
        return "/AppClimaNoite.jpg";

      case codigo == 2 && hora >= 5 && hora < 18://Neblina dia
      
        return "/AppClimaDiaNevoa.jpg";

      case codigo == 2 && hora >= 18 && hora < 5://Neblina noite
      
        return "/AppClimaNoiteNevoa.jpg";

      case codigo == 3 && hora >= 5 && hora < 18://Chuva dia
      
        return "/AppClimaDiaChuva.png";

      case codigo == 3 && hora >= 18 && hora < 5://Chuva noite
      
        return "/AppClimaNoiteChuva.png";

      case codigo == 4 || codigo == 6 && hora >= 5 && hora < 18://Neve Limpo dia
      
        return "/AppClimaNeveDia.jpg";

      case codigo == 4 || codigo == 6 && hora >= 18 && hora < 5://Neve Limpo noite
      
        return "/AppClimaNeveNoite.jpg";

      case codigo == 7 && hora >= 5 && hora < 18://Tempestade dia
      
        return "/AppClimaDiaVento.jpg";

      case codigo == 7 && hora >= 18 && hora < 5://Tempestade noite
      
        return "/AppClimaNoiteNevoa.jpg";
    
      default:
        
        return "/AppClimaDia.jpg";
    }
  }
// <Sun size={32} />
  export const getIcone = (codigo: number, hora: number): string => {
    switch (true) {
        case codigo == 0 || codigo == 8 || codigo == 5 && hora >= 5 && hora < 18://Céu Limpo dia
        
        return "SunIcon";

      case codigo == 0 || codigo == 8 || codigo == 5 && hora >= 18 && hora < 5://Céu Limpo noite
      
        return "MoonIcon";

      case codigo == 1 && hora >= 5 && hora < 18://Nublado dia
      
        return "SunIcon";

      case codigo == 1 && hora >= 18 && hora < 5://Nublado noite
      
        return "MoonIcon";

      case codigo == 2://Neblina dia
      
        return "CloudFogIcon";

      case codigo == 3://Chuva dia
      
        return "CloudRainIcon";

      case codigo == 4 || codigo == 6://Neve Limpo dia
      
        return "CloudSnowIcon";

      case codigo == 7://Tempestade dia
      
        return "WindIcon";
    
      default:
        
        return "SunIcon";
    }
  }