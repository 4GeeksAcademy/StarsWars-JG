const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            planets: [],
            vehicles: [],
            people: [],
            characterDetail: {},
            planetsDetail: {},
            favorites: [],




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
                    console.log('Planets data:', data.results); // Log de los datos de planetas
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
                    console.log('Vehicles data:', data.results); // Log de los datos de vehículos
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
                    console.log('People data:', data.results); // Log de los datos de personas
                    setStore({ people: data.results });
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
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
            },
            
        }
    };
};

export default getState;