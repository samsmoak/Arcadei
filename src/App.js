/* eslint-disable no-unused-vars */
import "./App.css";
// import { useEffect,useState } from "react";
// import {Carousel} from r
import Navigation from "./component/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./component/Main";
import Prices from "./component/Prices";
import Team from "./component/Team";
import Login from "./component/Login";
import Sales from "./component/Sales";
import Footer from "./component/Footer";
import Signup from "./component/Signup";
import Features from "./component/Features";

function App() {
	return (
		<div className=''>
			<Router>
				<Switch>
					<Route exact path='/' component={Main} />
					{/* <Route exact path='carousel' component={Carousel} /> */}
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/features' component={Features} />

					<Route exact path='/team' component={Team} />
					<Route exact path='/price' component={Prices} />
					<Route exact path='/sales' component={Sales} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
