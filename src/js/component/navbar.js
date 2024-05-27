import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext.js';


export const Navbar = () => {
	const { store,actions } = useContext(Context);

	return (
		<nav className="navbar bg-dark navbar-expand-lg sticky-top">
			<div className="container-fluid">
				
			<a  href="/" role="button">
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Descripción de la imagen" id="sw"/>
			</a>	

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className=" navbar-toggler-icon" id="iconwt"> </span>
				</button>


				<div className="collapse navbar-collapse justify-content-center fs-5 text-white mx-5" id="navbarNavDropdown">

					<ul className="navbar-nav flex-wrap separated">  
						<li className="nav-item nav-stars">
							<Link to="/personajes" className="nav-link  text-reset ">PERSONAJES</Link>
						</li>

						<li className="nav-item nav-stars">
							<Link to="/vehiculos" className="nav-link text-reset">VEHÍCULOS</Link>
						</li>

						<li className="nav-item nav-stars ">
							<Link to="/planetas" className="nav-link text-reset">PLANETAS</Link>
						</li>

						<li className="nav-item dropdown mb-4">
							<a className="nav-link dropdown-toggle  text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							FAVORITOS
						</a>

						

						<ul className="dropdown-menu dropdown-menu-scrollable " aria-labelledby="favoritesDropdown">
							{store.favorites.length === 0 ? (
							<li className="dropdown-item">No hay favoritos</li>
							) : (
							store.favorites.map((favorite) => (
								<li className="dropdown-item d-flex align-items-center" key={favorite.uid}>
								<p className="mx-3">
									{favorite.name}
								</p>
								<button
									onClick={() => actions.removeFavorite(favorite)}
									className="btn btn-danger btn-sm ms-auto "
								>
									<i className="fa-regular fa-trash-can"></i>
								</button>
								</li>
							))
							)}
						</ul>

						</li>
						</ul>
				</div>


			</div>
    	</nav>
	);
};
