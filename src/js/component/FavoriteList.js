import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const getImageFav = (type, id) => {
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

const FavoritesList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h2>Favoritos</h2>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {store.favorites.map((favorite) => (
          <div className="col" key={favorite.uid}>
            <div className="card glass-effect text-white">
              <img
                className="card-img-top img-thumbnails"
                src={getImageFav(favorite.type, favorite.uid)}
                alt={favorite.name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {favorite.name}
                  <button
                    onClick={() => actions.removeFavorite(favorite)}
                    className="btn btn-danger text-white btn-sm float-end"
                  >
                    Eliminar
                  </button>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
