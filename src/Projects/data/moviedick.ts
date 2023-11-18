import Project, { ProjectTypes } from "../class/Projects";

const data: ProjectTypes = {
  name: "MovieDick",
  extendedDescription:
    "MovieDick es una app hecha con NextJs 14, Typescript, TailwindCSS, entre otras tecnologias Javascript. En la app se consume información de la API TheMovieDb y se renderizan difrentes componentes como titulos, descripciones, imagenes, videos, etc. Esta aplicacion esta completamente echa por mi y aun sigo mejorando la optimización de las cargas.",
  description: "App de peliculas y series con trailer incluido",
  colorMain: "cyan",
  url: "https://moviedick.vercel.app/browse",
  urlGithub: "https://www.github.com/gonzaqepasa/moviedick",
  tech: ["react", "nextjs", "node"],
  state: "En Pruebas",
};

const moviedick = new Project(data);

export default moviedick;
