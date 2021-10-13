import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import {useState} from 'react';

function App() {
	const [paginaActual, setPaginaActual] = useState(1);
	const [peliculasData, setPeliculasData] = useState([]);
	const TOTAL_POR_PAGINA = 2;
	//let peliculas = peliculasJson;

	const buscarPeliculas = async () => {
		let url = 'https://61675b72ba841a001727c2e6.mockapi.io/api/peliculas/peliculas';
		var resultado = await fetch(url, {
			"method": 'GET',
			"headers": {
				"Accept": 'application/json',
				"Content-Type": 'application/json'
			}
		})
		let json = await resultado.json();
		setPeliculasData(json);
	}
	buscarPeliculas();
	
	const getTotalPaginas = () => {
		let canttotalpeliculas = peliculasData.length;
		return Math.ceil(canttotalpeliculas / TOTAL_POR_PAGINA); 
	}

  return (
	  <PageWrapper>
		{peliculasData.map(pelicula => {
				return (
					<Pelicula
						titulo={pelicula.titulo}
						calificacion={pelicula.calificacion}
						director={pelicula.director}
						actores={pelicula.actores}
						fecha={pelicula.fecha}
						duracion={pelicula.duracion}
						imagen={pelicula.img}
					>
						{pelicula.descripcion}
					</Pelicula>
				);
			})
		}
		<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
			setPaginaActual(pagina)
		}} />
	  </PageWrapper>
  );
}

export default App;
