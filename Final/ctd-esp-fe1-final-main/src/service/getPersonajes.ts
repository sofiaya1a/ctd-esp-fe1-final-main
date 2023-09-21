import Personajes from "../types/personajes.types";

//para resaltar los comentarios usar la extensiòn better comments

/**
 *
 *
 *  *Función que realiza el llamado a la API de Rick y Morty para obtener información sobre los personajes.
 *
 *
 *En paginaciòn por medio del componente se envia un argumento que en este caso es un string que contiene la palabra "page" que realizará el pedido de la siguiente o anterior página segón corresponda.

 En el componente de filtros , este realizara el pedido de personajes que sea igual al que este solicitando el usuario.
 * @param {string} nombre
 * @returns {array}
 */

export const getPersonajesHome = async (nombre?: string): Promise<Personajes[] | unknown> => {
    let params = "?"

    if (nombre) {
        nombre?.includes('page')
            ? params += nombre
            : params += `name=${nombre}`
    };

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);
        const results = await response.json();
        return results;


    } catch (error) {
        console.log(error);
    };
}
