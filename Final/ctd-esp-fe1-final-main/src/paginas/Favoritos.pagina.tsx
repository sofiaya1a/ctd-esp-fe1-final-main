import { useDispatch } from "react-redux";
import { eliminarTodosFavoritos } from "../actions/favoritosActions";
import { limpiarFiltro } from "../actions/personajesActions";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useSelector } from "../store/store";
import Personajes from "../types/personajes.types";

//para resaltar los comentarios usar la extensiòn better comments

/**
 * *Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 *  * @author Lilly Sofia Ayala R.
 * @returns { JSX element }
 *
 */
const PaginaFavoritos = (): JSX.Element => {
  const favoritos = useSelector((state) => state.favoritos.favoritos);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button
          className="danger"
          onClick={() => dispatch(eliminarTodosFavoritos())}
        >
          Eliminar todos
        </button>
      </div>

      <div className="grilla-personajes">
        {favoritos.length === 0 ? (
          <h4>No has seleccionado a ningún personaje como favorito.</h4>
        ) : (
          favoritos.map((favorito: { id: number; name: string; image: string; episode: string[]; }) => (
            <TarjetaPersonaje
              key={`personaje-${favorito.id}`}
              id={favorito.id}
              name={favorito.name}
              image={favorito.image}
              episode={favorito.episode}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PaginaFavoritos;
