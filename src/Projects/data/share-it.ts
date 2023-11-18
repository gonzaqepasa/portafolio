import Project, { ProjectTypes } from "../class/Projects";

const data: ProjectTypes = {
  name: "Share It",
  extendedDescription:
    "ShareIt es una red social con funcionalidades como seguir usuarios, hacer posteos con fotos, dar me gusta, hacer comentarios, etc. También tiene un sistema de pago para adquirir una membresía premium, entre otras funciones.",
  description: "Red social realizada en Henry para rendir final",
  colorMain: "yellow",
  state: "Versión Beta",
  urlGithub:"https://github.com/henry19ag15/finalproject",
  tech: [
    "express",
    "firebase",
    "javascript",
    "node",
    "sass",
    "redux",
    "react",
    "postgres",
  ],
  images: [
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fshareit%2F4.jfif?alt=media&token=607aaaa1-1ac3-46f4-ac7f-f375c29b4060",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fshareit%2F1.jfif?alt=media&token=dc6d3ad6-f579-49fe-b1b4-c4117b1b11d2",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fshareit%2F3.jfif?alt=media&token=aa8829cd-2d7f-476f-b175-4471b2027bf3",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fshareit%2F2.jfif?alt=media&token=59040fb6-0278-4f36-824b-3da7b6038ead",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fshareit%2F5.jfif?alt=media&token=ce1c727f-9250-41d5-b374-9ad2e9d21e39",
  ],
};

const share_it = new Project(data);

export default share_it;
