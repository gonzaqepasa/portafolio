import Project, { ProjectTypes } from "../class/Projects";

const data: ProjectTypes = {
  name: "MovieDick",
  extendedDescription:
    "Esta va a ser la descripcion general de todo el proyecto si o si requerida",
  description: "App de peliculas y series con trailer incluido",
  colorMain: "cyan",
};

const moviedick = new Project(data);

export default moviedick;
