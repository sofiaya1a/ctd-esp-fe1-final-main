import { BotonFavoritoInterface } from '../../types/boton-favorito-types';
import './boton-favorito.css';

//para resaltar los comentarios usar la extensiòn better comments

/**
 * *Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Se debe tipar las propiedades para usar este componente
 *
 * @author Lilly Sofia Ayala R.
 * @param { object | undefined } esFavorito
 * @param { Function } agregarFav
 * @returns { JSX.Element }
 */
const BotonFavorito = ({
  esFavorito,
  agregarFav,
}: BotonFavoritoInterface): JSX.Element => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} onClick={agregarFav} />
    </div>
  );
};

export default BotonFavorito;