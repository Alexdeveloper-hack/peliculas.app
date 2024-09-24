import { apikey } from "./confi.js";

document.addEventListener("DOMContentLoaded",async () => {
    return await peliculasApp();

});
const  peliculasApp = async () => {

    const url = 'http://api.themoviedb.org/3/movie/popular'

    const respuesta = await fetch(`${url}?api_key=${apikey}`)

    const datosPeliculas = await respuesta.json();

    const peliculas = datosPeliculas.results;

    const imgURL = [];

    peliculas.forEach(pelicula => {
        imgURL.push(`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`);
    });

    imgURL.forEach(img => {
        const imagenPelicula = document.createElement('img')
        imagenPelicula.src = img
        imagenPelicula.addEventListener('click', () =>{
            console.log(imagenPelicula)
            alert(img)
        })
        document.body.appendChild(imagenPelicula)
    })
}