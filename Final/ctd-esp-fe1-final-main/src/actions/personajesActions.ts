import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import Personajes from "../types/personajes.types";
import { IRootState } from "../store/store";
import { getPersonajesHome } from "../service/getPersonajes";

interface BuscarPersonajeParams {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: Personajes[];
}

export interface ComenzarDescargarPersonajes extends Action {
  type: "DESCARGA_INICIAL_PERSONAJES";
}

export interface DescargaPersonajesExitosa extends Action {
  type: "DESCARGA_EXITOSA_PERSONAJES";
  // payload: {
  //     personajes: Personajes[],
  // }
  data: BuscarPersonajeParams;
}

export interface DescargaPersonajesErrorea extends Action {
  type: "DESCARGA_ERRONEA_PERSONAJES";
  payload: {
    error: string;
  };
}

export interface LimpiarFiltro extends Action {
  type: "LIMPIAR_FILTRO";
}

export interface FiltrarPersonajes extends Action {
  type: "FILTRAR_PERSONAJES";
  personajeFiltrado: string;
}

export type PersonajesActions =
  | ComenzarDescargarPersonajes
  | DescargaPersonajesErrorea
  | DescargaPersonajesExitosa
  | LimpiarFiltro
  | FiltrarPersonajes;

export const comenzarDescargarPersonajes: ActionCreator<
  ComenzarDescargarPersonajes
> = () => {
  return {
    type: "DESCARGA_INICIAL_PERSONAJES",
    isLoading: true,
  };
};

export const descargaPersonajesExitosa: ActionCreator<
  DescargaPersonajesExitosa
> = (data: BuscarPersonajeParams) => {
  return {
    type: "DESCARGA_EXITOSA_PERSONAJES",
    isLoading: false,
    data: data,
  };
};

export const limpiarFiltro: ActionCreator<LimpiarFiltro> = () => {
  return {
    type: "LIMPIAR_FILTRO",
  };
};

export const filtrarPersonajes: ActionCreator<FiltrarPersonajes> = (
  personajeFiltrado: string
) => {
  return {
    type: "FILTRAR_PERSONAJES",
    personajeFiltrado,
  };
};

export const descargaPersonajesErrorea: ActionCreator<
  DescargaPersonajesErrorea
> = (error: string) => {
  return {
    type: "DESCARGA_ERRONEA_PERSONAJES",
    isLoading: false,
    payload: {
      error: error,
    },
  };
};

export interface BusquedaPersonajes
  extends ThunkAction<void, IRootState, unknown, PersonajesActions> {}

// thunk

export const busquedaPersonajes = (name?: string): BusquedaPersonajes => {
  return async (dispatch, getState) => {
    dispatch(comenzarDescargarPersonajes());
    try {
      const personajes = await getPersonajesHome(name);
      dispatch(descargaPersonajesExitosa(personajes));
    } catch (error) {
      dispatch(descargaPersonajesErrorea(error));
    }
  };
};
