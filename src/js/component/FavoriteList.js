import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const FavoritesList = () => {
  const { store, actions } = useContext(Context);



  const handleMoreDetails = (type, id) => {
    setDetailType(type);
    if (type === 'characters') {
        actions.getCharacterDetail(id).then(detail => {
            setSelectedDetail(detail);
        });
    } else if (type === 'planets') {
        actions.getPlanetDetail(id).then(detail => {
            setSelectedDetail(detail);
        });
    } else if (type === 'vehicles') {
        actions.getStarshipDetail(id).then(detail => {
            setSelectedDetail(detail);
        });
    }
};


  return (
    <>
      <div className="container">
      <div className="d-flex aling-content-center"> 
        <h1 className="text-center fs-1 text-warning mt-3">FAVORITOS</h1>
      </div>
      <div className="list-group w-50 ">
        {store.favorites.map((favorite) => (
          <div className="list-group-item list-group-item-action flex-column align-items-start" key={favorite.uid}>
            <div className="d-flex justify-content-start"> {/* Alineación al inicio */}
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1">{favorite.name}</h5>
                <button
                  onClick={() => actions.removeFavorite(favorite)}
                  className="btn btn-danger text-white btn-sm float-end"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default FavoritesList;
