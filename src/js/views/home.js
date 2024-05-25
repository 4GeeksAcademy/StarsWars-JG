		import React, { useContext, useEffect, useState, useParams } from 'react';
		import { Context } from '../store/appContext.js';
		import { Link } from "react-router-dom";
		import ship from '../../img/ship.png';
		import planet from '../../img/planet.png';
		import person from '../../img/person.png';
		import favs from '../../img/favs.png';
		import "../../styles/home.css";
		
		const getRandomItems = (items, num) => {
			const shuffled = [...items].sort(() => 0.5 - Math.random());
			return shuffled.slice(0, num);
		};

		const getImageUrl = (type, id) => {
			switch (type) {
			  case 'characters':
				return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
			  case 'planets':
				return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
			  case 'vehicles':
				return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
			  default:
				return 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
			}
		  };
	
		
		export const Home = () => {
			const { store,actions } = useContext(Context);
			const [randomPlanets, setRandomPlanets] = useState([]);
			const [randomVehicles, setRandomVehicles] = useState([]);
			const [randomPeople, setRandomPeople] = useState([]);
			
		
			useEffect(() => {

				if (store.planets.length > 0) {
					const selectedPlanets = getRandomItems(store.planets, 3);
					setRandomPlanets(selectedPlanets);
				}
				if (store.vehicles.length > 0) {
					const selectedVehicles = getRandomItems(store.vehicles, 3);
					setRandomVehicles(selectedVehicles);
				}
				if (store.people.length > 0) {
					const selectedPeople = getRandomItems(store.people, 3);
					setRandomPeople(selectedPeople);
				}
			}, [store.planets, store.vehicles, store.people]);
		
			if (store.planets.length === 0 || store.vehicles.length === 0 || store.people.length === 0) {
				return <div className='text-white'>Loading...</div>;
			};

			return (
				<>
						{/* Fondo burbujas */}
						<div className="burboBox-parent">
							<div className="burboBox">
									<div className="bubbles">
										<span style={{ '--i': 11 }} > </span>
										<span style={{ '--i': 12 }} > </span>
										<span style={{ '--i': 24 }} > </span>
										<span style={{ '--i': 10 }} > </span>
										<span style={{ '--i': 14 }} > </span>
										<span style={{ '--i': 23 }} > </span>
										<span style={{ '--i': 18 }} > </span>
										<span style={{ '--i': 16 }} > </span>
										<span style={{ '--i': 19 }} > </span>
										<span style={{ '--i': 20 }} > </span>
										<span style={{ '--i': 15 }} > </span>
										<span style={{ '--i': 13 }} > </span>
										<span style={{ '--i': 26 }} > </span>
										<span style={{ '--i': 17 }} > </span>
										<span style={{ '--i': 13 }} > </span>
										<span style={{ '--i': 28 }} > </span>
										<span style={{ '--i': 15 }} > </span>
										<span style={{ '--i': 13 }} > </span>
										<span style={{ '--i': 26 }} > </span>
										<span style={{ '--i': 17 }} > </span>
										<span style={{ '--i': 11 }} > </span>
										<span style={{ '--i': 12 }} > </span>
										<span style={{ '--i': 24 }} > </span>
										<span style={{ '--i': 10 }} > </span>
										<span style={{ '--i': 14 }} > </span>
										<span style={{ '--i': 23 }} > </span>
										<span style={{ '--i': 18 }} > </span>
										<span style={{ '--i': 16 }} > </span>
										<span style={{ '--i': 19 }} > </span>
										<span style={{ '--i': 20 }} > </span>
										<span style={{ '--i': 21 }} > </span>
										<span style={{ '--i': 15 }} > </span>
										<span style={{ '--i': 13 }} > </span>
										<span style={{ '--i': 26 }} > </span>
										<span style={{ '--i': 17 }} > </span>
										<span style={{ '--i': 13 }} > </span>
										<span style={{ '--i': 28 }} > </span>
										<span style={{ '--i': 15 }} > </span>
									</div>
							</div>
						</div>
						{/* Fondo burbujas */}

					<div className="container-fluid  p-5">
					
						<div className="row">

							<div className="col-md-3">

								<div className="card glass-effect text-white">
									<div className="card-body">
										<ul className="nav flex-column fs-5">
											<li className="nav-item mini-nav">
												<Link to="/personajes" className="nav-link fw-bold m-3" aria-current="page" >PERSONAJES <span><img src={person} id="imPers" alt="person"/></span></Link>
											</li>

											<li className="nav-item mini-nav">
												<Link to="/vehiculos" className="nav-link fw-bold m-3" >VEHÍCULOS <span><img src={ship} id="cule" alt="vehicle"/></span></Link>
											</li>

											<li className="nav-item mini-nav">
												<Link to="/planetas" className="nav-link fw-bold m-3">PLANETAS <span><img src={planet} id="imPers" alt="planet"/></span></Link>
											</li>
											
											<hr />
											<li className="nav-item mini-nav">
												<Link to="/favoritos" className="nav-link fw-bold m-3">FAVORITOS <span><img src={favs} id="favorite" alt="favorites"/></span></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
		
							{/* CREACIÓN DE CARDS Y CONSULTAS */}


							
							<div className="col-md-9 glass-effect"> 
								<div id="carouselExampleFade" className="carousel slide carousel-fade">
									<div className="carousel-inner">
									<div className="carousel-item active">
										<div className="card-group">
										<div className="card glass-effect text-white ">
											<div className="text-center text-warning">
											<h2 className='fs-3'>PERSONAJES</h2>
											</div>
											<div className="row row-cols-1 row-cols-md-3 g-1">
											{randomPeople.map((person) => (
												<div className="col" key={person.uid}>
												<div className="glass-effect ">
													<img src={getImageUrl('characters', person.uid)} alt={person.name} className='img-thumbnail '/>
													<div className="card-body">
														<h5 className="card-title">{person.name}
														</h5>
														<div className="btn-group " role="group" aria-label="Basic mixed styles example">
															<button type="button" className="btn btn-warning text-white">Ver más</button>
															<button onClick={() => actions.addFavorite(person)} type="button" className="btn btn-success">Favs</button>
															<button onClick={() => actions.removeFavorite(person)} type="button" className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
														</div>
													</div>
												</div>
												</div>
											))}
											</div>
										</div>
										</div>
									</div>

									<div className="carousel-item ">
										<div className="text-white">
										<div className="text-center text-warning">
											<h2 className='fs-3'>PLANETAS</h2>
										</div>
										<div className="row row-cols-1 row-cols-md-3 g-1">
											{randomPlanets.map((planetas) => (
											<div className="col" key={planetas.uid}>
												<div className="glass-effect">
												<img src={getImageUrl('planets', planetas.uid)} alt={planetas.name} className='img-thumbnail'/>
													<div className="card-body">
														<h5 className="card-title">{planetas.name}
														</h5>
														<div className="btn-group " role="group" aria-label="Basic mixed styles example">
															<button type="button" className="btn btn-warning text-white">Ver más</button>
															<button onClick={() => actions.addFavorite(planetas)} type="button" className="btn btn-success">Favs</button>
															<button onClick={() => actions.removeFavorite(planetas)} type="button" className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
														</div>
													</div>
												</div>
											</div>
											))}
										</div>
										</div>
									</div>


									<div className="carousel-item ">
										<div className="card glass-effect text-white">
										<div className="text-center text-warning">
											<h2 className='fs-3'>VEHÍCULOS</h2>
										</div>
										<div className="row row-cols-1 row-cols-md-3 g-1">
											{randomVehicles.map((vehi) => (
											<div className="col " key={vehi.uid}>
												<div className="glass-effect">
												<img src={getImageUrl('vehicles', vehi.uid)} alt={vehi.name} className='img-thumbnail'/>
													<div className="card-body">
														<h5 className="card-title">{vehi.name}
														</h5>
														<div className="btn-group " role="group" aria-label="Basic mixed styles example">
															<button type="button" className="btn btn-warning text-white">Ver más</button>
															<button onClick={() => actions.addFavorite(vehi)} type="button" className="btn btn-success">Favs</button>
															<button onClick={() => actions.removeFavorite(vehi)} type="button" className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
														</div>
													</div>
												</div>
											</div>
											))}
										</div>
										</div>
									</div>


									</div>


									<button className="carousel-control-prev sombra-slide" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="visually-hidden sombra-slide">Previous</span>
									</button>
									<button className="carousel-control-next sombra-slide" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="visually-hidden sombra-slide">Next</span>
									</button>
								</div>
								</div>

					</div>		
					</div> {/* Div ROW */}
				</>
			);
		};
		