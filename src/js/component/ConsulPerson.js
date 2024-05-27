import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';
import "../../styles/pop.css"

const ConsulVehicle = () => {
    const { store, actions } = useContext(Context);
    const [peoples, setPeoples] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(null); 
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 }); // Estado para almacenar la 

    useEffect(() => {
        const fetchData = async () => {
            if (store.people.length === 0) {
                await actions.fetchPeople();
            }
        };
        fetchData();
    }, [actions, store.people.length]);

    useEffect(() => {
        setPeoples(store.people);
    }, [store.people]);

    if (peoples.length === 0) {
        return <div className='text-white'>Loading...</div>;
    }

    const handleShowDetails = async (personaje, event) => {
        const detail = await actions.getCharacterDetail(personaje.uid);
        setSelectedPerson(detail);
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
            <h1 className='text-center fs-1 text-warning'>PERSONAJES</h1>
            <div className="card-group m-2 p-2">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {peoples.map((personajes) => (
                        <div className="col" key={personajes.uid}>
                            <div className="card glass-effect text-white shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img className="card-img-top img-thumbnails rounded" src={`https://starwars-visualguide.com/assets/img/characters/${personajes.uid}.jpg`} alt={personajes.name} />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {personajes.name}
                                    </h5>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-warning text-white" onClick={(e) => handleShowDetails(personajes, e)}>Ver más</button>
                                        <button onClick={() => actions.addFavorite(personajes)} type="button" className="btn btn-success">Favs</button>
                                        <button onClick={() => actions.removeFavorite(personajes)} type="button" className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedPerson && (
                <div className='miniEffect w-50 text-white m-3 position-absolute' style={{ top: popupPosition.y, left: popupPosition.x }}>
                    <div className="container">
                        <h2 className="text-center fs-2 text-warning">Detalles de {selectedPerson.name}</h2>
                        <p>Altura: {selectedPerson.height}</p>
                        <p>Nacimiento: {selectedPerson.birth_year}</p>
                        <p>Color de Cabello: {selectedPerson.hair_color}</p>
                        <p>Color de Ojos: {selectedPerson.eye_color}</p>
                        <p>Color de Piel: {selectedPerson.skin_color}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConsulVehicle;
