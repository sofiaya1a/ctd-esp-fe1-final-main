import { combineReducers } from "@reduxjs/toolkit"; // createStore
import { composeWithDevTools } from 'redux-devtools-extension';

//para resaltar los comentarios usar la extensiòn better comments

// * Importamos el applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware.

import { createStore, applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";

import thunk from 'redux-thunk'
import personajesReducer  from '../reducer/personajesReducer'
import favoritosReducer from "../reducer/favoritosReducer";



const rootReducer = combineReducers({
   personajes: personajesReducer,
   favoritos: favoritosReducer
});


// solo sirve en TypeScript para que nos diga el tipo de datos que retorna nuestro store.
export type IRootState = ReturnType<typeof rootReducer>;

// Tipado del hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

//!esta deprecado, se usa configureStore. Al store ingresamos a los reducers, es decir, estados y acciones
export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);



