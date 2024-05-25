import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext.js';

const ConsulPlanetas = () => {
    const { store, actions } = useContext(Context);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await actions.fetchPlanets();
        };
        fetchData();
    }, [actions]);

    useEffect(() => {
        setPlanets(store.planets);
    }, [store.planets]);

    if (planets.length === 0) {
        return <div className='text-white'>Loading...</div>;
    }

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
        <h1 className='text-center fs-1 text-warning'>PLANETAS</h1>
            <div className="card-group m-2 p-2">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {planets.map((planetas) => (
                    <div className="col " key={planetas.uid}>
                        <div className="card glass-effect text-white shadow p-3 mb-5 bg-body-tertiary rounded">
                        <img className="card-img-top img-thumbnails rounded" src={`https://starwars-visualguide.com/assets/img/planets/${planetas.uid}.jpg`} alt={planetas.name} />
                        <div className="card-body">
                            <h5 className="card-title">
                            {planetas.name}
                            </h5>
                            <div className="btn-group " role="group" aria-label="Basic mixed styles example">
                                <button type="button" className="btn btn-warning text-white">Ver más</button>
                                <button type="button" className="btn btn-success">Favs</button>
                                <button type="button" className="btn btn-danger"><i class="fa-regular fa-trash-can"></i></button>
                            </div>                      
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
    </>
    );
};

export default ConsulPlanetas;
