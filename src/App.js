import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from "./Components/Home";
import Planets from "./Components/Planets";
import Galaxies from "./Components/Galaxies";
import Satelities from "./Components/Satelities";
import Gallery from "./Components/Gallery";
import Forum from './Components/Forum'
import Copy from "./Image/copyright.png";
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'



function App() {
  return (
		<>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Planets" component={Planets} />
					<Route exact path="/Galaxies" component={Galaxies} />
					<Route exact path="/Satelities" component={Satelities} />
					<Route exact path="/Gallery" component={Gallery} />
					<Route exact path="/Forum" component={Forum} />
				</Switch>
			</Router>
			<footer className="text-white">
				<div className="flex justify-center gap-1">
					<p>Matthew Lee</p>
					<img src={Copy} alt="" />
					<p>2022</p>
				</div>
			</footer>
		</>
  );
}

export default App;
