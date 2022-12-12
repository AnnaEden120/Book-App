import { createContext, useContext } from "react";
import { useState } from "react";
import Favorites from "../Favorites";

const AppContext=createContext(null);

export const useAppContext=()=>{
    const context=useContext(AppContext);

    if(context===undefined){
        throw new Error('Appcontext must be whitin appContextProvider!')
    }

    return context;
}

const AppContextProvider=({children})=>{
const [favorites, setFavorites]=useState([]);

const addToFavorties=(book)=>{
const oldFavorites=[...favorites];

const newFavorites= oldFavorites.concat(book);

setFavorites(newFavorites);
};

const removeFromFavorites=(id)=>{
    const oldFavorites=[...favorites];
    const newFavorites=oldFavorites.filter((book)=>book.id !==id);

    setFavorites(newFavorites);
};

    return(
        <AppContext.Provider value={{favorites, addToFavorties, removeFromFavorites}}>
        {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;