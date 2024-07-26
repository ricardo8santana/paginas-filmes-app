import Filme1 from '../img/Filme1.jpg';
import Filme2  from '../img/Filme2.jpg';
import Filme3  from '../img/Filme3.jpg';
import Serie1 from '../img/Serie1.jpg';
import Serie2 from '../img/Serie2.jpg';
import Serie3 from '../img/Serie3.jpg';
import ItemFilme from './itemFilme';
import CatalagoItens from './CatalagoItens';
import Header from './Header';
import { fetchTopFilmes } from '../services/tmdbService';
import { useState, useEffect } from 'react';
import { fetchTopSeries } from '../services/tmdbService';


const Home = () => {
    const [topFilmes,  setTopFilmes ] = useState([]);
    const [topSeries,  setTopSeries] = useState([]);
    useEffect(()=>{
      const fetchtopTitulos = async () => {
        try{
          const listaFilmes = await fetchTopFilmes();
          const listaSeries = await fetchTopSeries();
          setTopFilmes(listaFilmes);
          setTopSeries(listaSeries)
        } catch (error) {
          console.error('Erro ao buscar titulos:', error);
        }
      }
      fetchtopTitulos();
    }, []);

    // const nomesSeries = ['The Last Of Us', 'Prison Break', 'Stranger Things','S1'];
    // const imgsSeries = [Serie1, Serie2, Serie3, Serie3, Serie1];
  
    const CatalagoFilmes = [
      {nome:'Guardiões da Galaxia', imagem: Filme1},
      {nome:'Rota de Fuga 3', imagem: Filme2},
      {nome:'Uma Aventura no Fim do Mundo', imagem: Filme3},
      {nome: 'Guardiões da Galaxia', imagem: Filme1},
      {nome:'Rota de Fuga 3', imagem: Filme2},
      {nome:'Uma Aventura no Fim do Mundo', imagem: Filme3},
      {nome: 'Guardiões da Galaxia', imagem: Filme1},
      {nome:'Rota de Fuga 3', imagem: Filme2},
      {nome:'Uma Aventura no Fim do Mundo', imagem: Filme3},
      
    ];
  
    const catalagoSeries = [
      {nome:'The Last Of Us', imagem: Serie1},
      {nome: 'Prison Break', imagem: Serie2},
      {nome: 'Stranger Things', imagem:Serie3},
      {nome:'The Last Of Us', imagem: Serie1},
      {nome: 'Prison Break', imagem: Serie2},
      {nome: 'Stranger Things', imagem:Serie3},
      {nome:'The Last Of Us', imagem: Serie1},
      {nome: 'Prison Break', imagem: Serie2},
      {nome: 'Stranger Things', imagem:Serie3}
    ]
  
    return (
      <>
        <Header/>

        <CatalagoItens 
          titulo="Filmes"
          catalagos={topFilmes}
          tituloMt={true}
        />
        <CatalagoItens 
          titulo="Series"
          catalagos={topSeries}
          tituloMt={true}
        />
         
      </>
    )

}
export default Home;