import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';
import "../../styles/pop.css";

const ConsulVehicle = () => {
    const { store, actions } = useContext(Context);
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const fetchData = async () => {
            if (store.vehicles.length === 0) {
                await actions.fetchVehicles();
            }
        };
        fetchData();
    }, [actions, store.vehicles.length]);

    useEffect(() => {
        setVehicles(store.vehicles);
    }, [store.vehicles]);

    if (vehicles.length === 0) {
        return <div className='text-white'>Loading...</div>;
    }

    const handleShowDetails = async (vehicle, event) => {
        const detail = await actions.getStarshipDetail(vehicle.uid);
        setSelectedVehicle(detail);
        const buttonPositionX = event.clientX;
        const buttonPositionY = event.clientY;
        setPopupPosition({ x: buttonPositionX, y: buttonPositionY });
    };

    return (
        <>
            {/* Fondo burbujas */}
            <div className="burboBox-parent">
                <div className="burboBox">
                    <div className="bubbles">
                        {[...Array(30)].map((_, index) => (
                            <span key={index} style={{ '--i': index + 10 }} ></span>
                        ))}
                    </div>
                </div>
            </div>
            {/* Fondo burbujas */}
            <h1 className='text-center fs-1 text-warning'>VEHÍCULOS</h1>
            <div className="card-group m-2 p-2">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {vehicles.map((vehicle) => (
                        <div className="col" key={vehicle.uid}>
                            <div className="card glass-effect text-white shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img className="card-img-top img-thumbnails rounded" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} alt={vehicle.name} />

                                <div className="card-body">
                                    <h5 className="card-title">
                                        {vehicle.name}
                                    </h5>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-warning text-white" onClick={(e) => handleShowDetails(vehicle, e)}>Ver más</button>
                                        <button onClick={() => actions.addFavorite(vehicle)} type="button" className="btn btn-success">Favs</button>
                                        <button onClick={() => actions.removeFavorite(vehicle)} type="button" className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedVehicle && (
                <div className='miniEffect w-50 text-white m-3 position-absolute' style={{ top: popupPosition.y, left: popupPosition.x }}>
                    <div className="container">
                        <h2 className="text-center fs-2 text-warning">Detalles de {selectedVehicle.properties.name}</h2>
                        <p>Modelo: {selectedVehicle.properties.model}</p>
                        <p>Fabricante: {selectedVehicle.properties.manufacturer}</p>
                      
                    </div>
                </div>
            )}
        </>
    );
};

export default ConsulVehicle;
