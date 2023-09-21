import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch } from "react-redux";
import {
  busquedaPersonajes,
  limpiarFiltro,
} from "../actions/personajesActions";
import { useEffect } from "react";

//para resaltar los comentarios usar la extensiòn better comments

/**
 * *Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 *
 * @returns {JSX element}
 */
const PaginaInicio = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(busquedaPersonajes());
  }, []);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button
          className="danger"
          onClick={() => {
            dispatch(limpiarFiltro());
            dispatch(busquedaPersonajes());
          }}
        >
          Limpiar filtro
        </button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
