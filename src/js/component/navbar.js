import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark navbar-expand-lg ">
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

						<li className="nav-item dropdown ">
							<a className="nav-link dropdown-toggle  text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							FAVORITOS
						</a>

						

							<ul className="dropdown-menu sub glass-efect z-3">
								<li><Link to="/action" className="dropdown-item text-reset">Action</Link></li>
								<li><Link to="/another-action" className="dropdown-item text-reset">Another action</Link></li>
								<li><Link to="/something-else" className="dropdown-item text-reset">Something else here</Link></li>
							</ul>

						</li>
						</ul>
				</div>


			</div>
    	</nav>
	);
};
