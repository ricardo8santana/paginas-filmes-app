import axios from  'axios';

const apiKey = '9f9114143112e7d28039ff7a609cb00c';

const fetchTrailer = async (id, tipo) => {
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/${tipo}/${id}/videos?api_key=${apiKey}&language=pt-BR`);
        const trailer = response.data.results[0].key;
        return trailer;
    }catch(error){
        console.error("Erro ao buscar trailer", error);
        return null;
    }
}

export const fetchTopFilmes = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pt-BR`);
        // return response.data.result;
        const dadosFilme = response.data.results;

        const dadosFilmeTrad = await Promise.all (dadosFilme.map(async ( {id, title, poster_path, overview }) => {
            const trailerKey = await fetchTrailer (id, 'movie');
            return{
            id : id,
            nome: title,
            imagem:'https://image.tmdb.org/t/p/original/'+poster_path,
            sinopse: overview,
            trailer : trailerKey
           } 
        }));
        
        return dadosFilmeTrad;

        } catch (error) {
        console.error("Erro ao buscar top filmes");
        return[];
        }
};

export const fetchTopSeries = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&language=pt-BR`);
        const dadosFilme = response.data.results;
        
        const dadosFilmeTrad = await Promise.all (dadosFilme.map(async ( {id, name, poster_path, overview }) => {
            const trailerKey = await fetchTrailer (id, 'tv');
            return{
            id : id,
            nome: name,
            imagem:'https://image.tmdb.org/t/p/original/'+poster_path,
            sinopse: overview,
            trailer:trailerKey
           } 
        }));
        
        return dadosFilmeTrad;

    } catch (error) {
    console.error("Erro ao buscar top series");
    return[];
    }
};

export const fetchTopTitulos = async () => {
    try {
        const [filmes, series] = await Promise.all([fetchTopFilmes(), fetchTopSeries()]);
        const topTitulos = [...filmes, ...series];

        return topTitulos;
    }catch (error) { 
        console.error("Erro ao buscar top títulos:", error);

    }
}
