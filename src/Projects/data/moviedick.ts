import Project, { ProjectTypes } from "../class/Projects";

const data: ProjectTypes = {
  name: "MovieDick",
  extendedDescription:
    "Esta va a ser la descripcion general de todo el proyecto si o si requerida",
  description: "App de peliculas y series con trailer incluido",
  colorMain: "cyan",
  url: "https://moviedick.vercel.app/browse",
  urlGithub: "https://www.github.com/gonzaqepasa/moviedick",
  tech: ["react", "nextjs", "node"],
};

const moviedick = new Project(data);

export default moviedick;
