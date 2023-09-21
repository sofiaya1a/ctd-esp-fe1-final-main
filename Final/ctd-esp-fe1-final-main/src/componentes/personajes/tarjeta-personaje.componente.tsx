import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Personajes from "../../types/personajes.types";
import { useSelector } from "../../store/store";
import {
  agregarFavorito,
  eliminarFavorito,
} from "../../actions/favoritosActions";

//para resaltar los comentarios usar la extensiòn better comments

/**
 * *Tarjeta para cada personaje dentro de la grilla de personajes.
 * @param { Personaje } personaje
 * @returns { JSX element }
 */

const TarjetaPersonaje = ({
  id,
  name,
  image,
  episode,
}: Personajes): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoritos = useSelector((state) => state.favoritos.favoritos);

  const esFavorito = favoritos.find((fav: { id: number; }) => fav.id === id);

  //para resaltar los comentarios usar la extensiòn better comments

  /**
   * *Función que en caso que el personaje no se encuentre en Favoritos, al dar click despacha la acción para agregarlo.
   * 
   * Si ya se encuentra en favoritos, al volver a  dar click se elimina.
   */
  const agregarFav = () => {
    !esFavorito
      ? dispatch(agregarFavorito({ id, name, image }))
      : dispatch(eliminarFavorito({ id, name, image }));
  };

  return (
    <div className="tarjeta-personaje">
      <img src={image} alt={name} />
      <div className="tarjeta-personaje-body">
        <span>{name}</span>
        <BotonFavorito esFavorito={esFavorito} agregarFav={agregarFav} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
