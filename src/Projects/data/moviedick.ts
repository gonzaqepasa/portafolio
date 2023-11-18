import Project, { ProjectTypes } from "../class/Projects";

const data: ProjectTypes = {
  name: "MovieDick",
  extendedDescription:
    "MovieDick es una app hecha con NextJs 14, Typescript, TailwindCSS, entre otras tecnologías Javascript. En la app se consume información de la API TheMovieDb y se renderizan diferentes componentes como títulos, descripciones, imágenes, videos, etc. Esta aplicación esta completamente echa por mi y aun sigo mejorando la optimización de las cargas.",
  description: "App de peliculas y series con trailer incluido",
  colorMain: "cyan",
  url: "https://moviedick.vercel.app/browse",
  urlGithub: "https://www.github.com/gonzaqepasa/moviedick",
  tech: ["react", "nextjs", "node", "tailwind", "typescript"],
  state: "Versión Beta",
  images: [
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fmoviedick%2F1.jpeg?alt=media&token=428f036d-ed15-4e4c-90c1-6ac639a2d382",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fmoviedick%2F2.jpeg?alt=media&token=ac358075-214f-47f6-9419-58368277ebaa",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fmoviedick%2F3.jpeg?alt=media&token=143f42c5-96c6-44e2-9a51-e5b27e0e8930",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fmoviedick%2F4.jpeg?alt=media&token=c970fd57-9293-4cc5-af6a-e5ed9098af21",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fmoviedick%2F5.jpeg?alt=media&token=4cfee94f-f45f-430e-bc73-36885823a64f",
  ],
};

const moviedick = new Project(data);

export default moviedick;
