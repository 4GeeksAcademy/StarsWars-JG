const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            favorites: [],
            planetDetail: {},
            starshipDetail: {},
            characterDetail: {},
            

            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {

             fetchPlanets: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets/');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                }
            },
           

            fetchVehicles: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/vehicles/');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                }
            },
            fetchPeople: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people/');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                }
            },


            getCharacterDetail: (id) => {
                return fetch(`https://www.swapi.tech/api/people/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        setStore({ characterDetail: data.result.properties });
                        return data.result.properties;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },

            getPlanetDetail: (id) => {
                return fetch(`https://www.swapi.tech/api/planets/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        setStore({ planetDetail: data.result.properties });
                        return data.result.properties;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },

            getStarshipDetail: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    const data = await response.json();
                    setStore({ starshipDetail: data.result.properties });
                    return data.result;
                } catch (error) {
                }
            },
            

              
            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.find(fav => fav.uid === item.uid)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

            // Eliminar de favoritos
            removeFavorite: (item) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav.uid !== item.uid) });
            },
   
            loadInitialData: async () => {
                await getActions().fetchPlanets();
                await getActions().fetchVehicles();
                await getActions().fetchPeople();
                await getActions().getStarshipDetail();
            },
            
        }
    };
};

export default getState;