import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

//Contiene un Hook que hace un funcion.
//Una vez useFetchGifs tiene el resultado, lo retorna en forma de objeto.
export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true) 

    //El helper "getGifs" es Helper porque es una instruccion que se llama solo cuando es requeridos.
    //GetGifs: Se encarga de conectarse a la API y se trae un arreglo con objetos (GIF con sus datos)
    const getImages = async () => {
      const newImages = await getGifs(category);
      setimages(newImages);
      setisLoading(false)
    };
  
    //Llama solo una vez a getImages, sin usar el useEffect, es una pésima practica
    useEffect(() => {
      getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
