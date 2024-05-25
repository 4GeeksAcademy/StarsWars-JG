import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import ConsulPlanetas from "./component/ConsulPlanetas";
import ConsulVehicle from "./component/ConsulVehicle";
import ConsulPerson from "./component/ConsulPerson";
import FavoritesList from "./component/FavoriteList";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/planetas" element={<ConsulPlanetas />} />
						<Route path="/vehiculos" element={<ConsulVehicle />} />
						<Route path="/personajes" element={<ConsulPerson />} />
						<Route path="/favoritos" element={<FavoritesList />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
