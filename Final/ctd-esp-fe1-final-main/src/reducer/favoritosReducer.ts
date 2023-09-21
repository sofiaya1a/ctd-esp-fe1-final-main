import { Reducer } from "@reduxjs/toolkit";
import { FavoritosActions } from "../actions/favoritosActions";
import Personajes from "../types/personajes.types";


export interface FavoritosInitialState {
    favoritos: Personajes[]
}

const favoritosInitialState: FavoritosInitialState = {
    favoritos: [],
};

const favoritosReducer: Reducer<FavoritosInitialState, FavoritosActions> = (
    state = favoritosInitialState, action): FavoritosInitialState => {
        switch(action.type) {
            case "AGREGAR_FAVORITO":
                return{
                    ...state,
                    favoritos: [...state.favoritos, action.personajes]
                };

            case "ELIMINAR_FAVORITO":
                return {
                    ...state,
                    favoritos: state.favoritos.filter(fav => fav.id !== action.personajes.id)
                };

            case "ELIMINAR_TODOS_FAVORITOS":
                return{
                    ...state,
                    favoritos: []
                };

            default:
                return state
        }
}

export default favoritosReducer;