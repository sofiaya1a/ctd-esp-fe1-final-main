import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { IRootState } from "../../store/store";
import { useDispatch, TypedUseSelectorHook } from "react-redux";
import { FC, useEffect, useState } from "react";
import Personajes from "../../types/personajes.types";
import { busquedaPersonajes } from "../../actions/personajesActions";
import { useSelector } from "../../store/store";

//para resaltar los comentarios usar la extensiòn better comments

/**
 * *Componente que renderiza la grilla de personajes para la página de inicio
 *
 *  * @author Lilly Sofia Ayala R.
 * @returns { JSX element }
 */

const GrillaPersonajes: FC = (): JSX.Element => {
  const personajesHome: Personajes[] = useSelector(
    (state) => state.personajes.personajes
  );
  const isLoading = useSelector((state) => state.personajes.isLoading);

  if (personajesHome.length === 0)
    return <h4>No se encontró ningun personaje según tu busqueda.</h4>;

  return (
    <div className="grilla-personajes">
      {isLoading ? (
        <h4>Cargando personajes...</h4>
      ) : (
        personajesHome.map((personaje) => (
          <TarjetaPersonaje
            id={personaje.id}
            name={personaje.name}
            image={personaje.image}
            episode={personaje.episode}
          />
        ))
      )}
    </div>
  );
};

export default GrillaPersonajes;
