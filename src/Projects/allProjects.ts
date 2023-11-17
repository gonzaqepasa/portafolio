import Project from "./class/Projects";
import moviedick from "./data/moviedick";

// En este archivo se van a exportar todos los proyectos dentro de un array
// Sirve para renderizar los enlaces en el Navbar
////// CUANDO SE AGREGE UN PROYECTO NUEVO
// Se debe crear en la carpeta data el archivo con el nombre del proyecto
// con el constructor de la clase Projects y se exporta, luego se importa aca
// y se agrega al array

const allProjects: Project[] = [moviedick];

export default allProjects;
