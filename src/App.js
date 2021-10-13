import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import peliculasJson from './peliculas.json';
import {useState} from 'react';

function App() {
	const [paginaActual, setPaginaActual] = useState(1);
	const TOTAL_POR_PAGINA = 2;
	let peliculas = peliculasJson;
	peliculas = peliculas.slice((paginaActual - 1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA);
	const getTotalPaginas = () => {
		let canttotalpeliculas = peliculasJson.length;
		return Math.ceil(canttotalpeliculas / TOTAL_POR_PAGINA); 
	}
  return (
	  <PageWrapper>
		{peliculas.map(pelicula => {
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
