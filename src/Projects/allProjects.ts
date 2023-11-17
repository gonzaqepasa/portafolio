import Project from "./class/Projects";
import cuota_admin from "./data/cuota-admin";
import moviedick from "./data/moviedick";
import share_it from "./data/share-it";

// En este archivo se van a exportar todos los proyectos dentro de un array
// Sirve para renderizar los enlaces en el Navbar
////// CUANDO SE AGREGE UN PROYECTO NUEVO
// Se debe crear en la carpeta data el archivo con el nombre del proyecto
// con el constructor de la clase Projects y se exporta, luego se importa aca
// y se agrega al array

const allProjects: Project[] = [moviedick,cuota_admin,share_it];

export default allProjects;
