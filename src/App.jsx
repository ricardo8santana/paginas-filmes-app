
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import ExibeTitulo from './components/ExibeTitulo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Filme1 from './img/Filme1.jpg';
import Filme2  from './img/Filme2.jpg';
import Filme3  from './img/Filme3.jpg';
import Serie1 from './img/Serie1.jpg';
import Serie2 from './img/Serie2.jpg';
import Serie3 from './img/Serie3.jpg';

function App() {
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
    
  
    {nome:'The Last Of Us', imagem: Serie1},
    {nome: 'Prison Break', imagem: Serie2},
    {nome: 'Stranger Things', imagem:Serie3},
    {nome:'The Last Of Us', imagem: Serie1},
    {nome: 'Prison Break', imagem: Serie2},
    {nome: 'Stranger Things', imagem:Serie3},
    {nome:'The Last Of Us', imagem: Serie1},
    {nome: 'Prison Break', imagem: Serie2},
    {nome: 'Stranger Things', imagem:Serie3}
  ];
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/ExibeTitulo/:nome',
      element: <ExibeTitulo catalago={CatalagoFilmes}/>
    }
  ]) 

  return(
  //<Home/>
  //<ExibeTitulo/>
  <RouterProvider router={rotas}/>
  )
}

export default App

