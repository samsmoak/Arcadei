import "./App.css";
// import { useEffect,useState } from "react";
// import {Carousel} from r
import Carousel from "./component/Carouselcom";
import Navigation from "./component/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./component/Main";
import Prices from "./component/Prices";
import Team from "./component/Team";
import Login from "./component/Login";
import Sales from "./component/Sales";
import Footer from "./component/Footer";

function App() {
	return (
		<div className=''>
			<Router>
				<Navigation className='bg-blue-600' />

				<Switch>
					<Route exact path='/' component={Main} />
					{/* <Route exact path='carousel' component={Carousel} /> */}
					<Route exact path='/login' component={Login} />
					<Route exact path='team' component={Team} />
					<Route exact path='/price' component={Prices} />
					<Route exact path='/sales' component={Sales} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
