import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import Personajes from "../types/personajes.types";
import { IRootState } from "../store/store";

interface AgregarFavorito extends Action {
  type: "AGREGAR_FAVORITO";
  personajes: Personajes;
}

interface EliminarFavorito extends Action {
  type: "ELIMINAR_FAVORITO";
  personajes: Personajes;
}
interface EliminarTodosFavoritos extends Action {
  type: "ELIMINAR_TODOS_FAVORITOS";
}

export type FavoritosActions =
  | AgregarFavorito
  | EliminarFavorito
  | EliminarTodosFavoritos;

export const agregarFavorito: ActionCreator<AgregarFavorito> = (
  personajes: Personajes
) => {
  return {
    type: "AGREGAR_FAVORITO",
    personajes: personajes,
  };
};

export const eliminarFavorito: ActionCreator<EliminarFavorito> = (
  personajes: Personajes
) => {
  return {
    type: "ELIMINAR_FAVORITO",
    personajes: personajes,
  };
};

export const eliminarTodosFavoritos: ActionCreator<
  EliminarTodosFavoritos
> = () => {
  return {
    type: "ELIMINAR_TODOS_FAVORITOS",
  };
};

