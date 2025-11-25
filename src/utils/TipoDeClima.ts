export const getTipoDeClima = (codigo: number): number => {
    switch (true) {
        case codigo == 0://Céu Limpo
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
        // console.log("1");
        return "/AppClimaDia.jpg";

      case codigo == 0 || codigo == 8 || codigo == 5 && hora >= 18 && hora < 5://Céu Limpo noite
      // console.log("2");
        return "/AppClimaNoite.jpg";

      case codigo == 1 && hora >= 5 && hora < 18://Nublado dia
      // console.log("3");
        return "/AppClimaDia.jpg";

      case codigo == 1 && hora >= 18 && hora < 5://Nublado noite
      // console.log("4");
        return "/AppClimaNoite.jpg";

      case codigo == 2 && hora >= 5 && hora < 18://Neblina dia
      // console.log("5");
        return "/AppClimaDiaNevoa.jpg";

      case codigo == 2 && hora >= 18 && hora < 5://Neblina noite
      // console.log("6");
        return "/AppClimaNoiteNevoa.jpg";

      case codigo == 3 && hora >= 5 && hora < 18://Chuva dia
      // console.log("7");
        return "/AppClimaDiaChuva.png";

      case codigo == 3 && hora >= 18 && hora < 5://Chuva noite
      // console.log("8");
        return "/AppClimaNoiteChuva.png";

      case codigo == 4 || codigo == 6 && hora >= 5 && hora < 18://Neve Limpo dia
      // console.log("9");
        return "/AppClimaNeveDia.jpg";

      case codigo == 4 || codigo == 6 && hora >= 18 && hora < 5://Neve Limpo noite
      // console.log("10");
        return "/AppClimaNeveNoite.jpg";

      case codigo == 7 && hora >= 5 && hora < 18://Tempestade dia
      // console.log("11");
        return "/AppClimaDiaVento.jpg";

      case codigo == 7 && hora >= 18 && hora < 5://Tempestade noite
      // console.log("12");
        return "/AppClimaNoiteNevoa.jpg";
    
      default:
        // console.log("13");
        return "/AppClimaDia.jpg";
    }
  }

  export const getIcone = (codigo: number) => {
    switch (codigo) {
        case 0:
            
            break;
    
        default:
            break;
    }
  }