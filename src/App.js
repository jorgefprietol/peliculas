import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import ListadoPeliculas from './ListadoPeliculas';
// valores cargados desde el json
function App() {

  return (
	  <Router>
	  <Switch>
		<Route exact path="/">
		  <ListadoPeliculas />
		</Route>
		<Route path="/blog">
		  <Blog />
		</Route>
	  </Switch>
	</Router>
  );
}

export default App;
