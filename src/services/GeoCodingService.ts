import axios from "axios";

const geoCodeApi = axios.create({
    baseURL: "https://geocoding-api.open-meteo.com/v1/search"
})

export const buscarCidade = async (nome: string) => {
    try{
        const resposta = await geoCodeApi.get("", {
            params:{
                name: nome,
            }
        });
        if(!resposta.data.results) return null;
        
        const cidade = resposta.data.results[0];
        
        return {
            lat: cidade.latitude,
            lon: cidade.longitude,
            nome: cidade.name,
            pais: cidade.country,
        };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch(e){
        alert("Ocorreu um erro ao buscar o nome na API");
        return null;
    }
}
