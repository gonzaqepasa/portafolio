import Project, { ProjectTypes } from "../class/Projects";

const data: ProjectTypes = {
  name: "Cuota-Admin",
  extendedDescription:
    "Cuota-Admin es un sistema de control de cuotas y resumen de mes para un gimnasio familiar, el proyecto se encuentra en producción desde principios de 2023 y para 2024 se vienen cambios muy grandes en la app, se van a agregar funciones que interactúan con los clientes, entre otras cosas.",
  description: "Sistema de control de cuotas para un gym",
  colorMain: "red",
  state: "En Producción",
  urlGithub: "https://github.com/gonzaqepasa/cuota-admin",
  tech: [
    "firebase",
    "nextjs",
    "typescript",
    "tailwind",
    "react",
    "postgres",
    "node",
  ],
  images: [
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fcuotaadmin%2F1.jpeg?alt=media&token=b0e044bf-e354-478e-a552-f36db1b2f841",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fcuotaadmin%2F2.jpeg?alt=media&token=3841065b-bebc-4c67-88ca-4455b2137a3b",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fcuotaadmin%2F3.jpeg?alt=media&token=ec7fbe4c-47d8-472b-98f6-d2f951e022dd",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fcuotaadmin%2F4.jpeg?alt=media&token=8d2d3723-8562-4902-99ee-18f21cedfb7f",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fcuotaadmin%2F5.jpeg?alt=media&token=8062e4cb-7e4c-46c9-86a4-679961a6f3db",
    "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fcuotaadmin%2F6.jpeg?alt=media&token=62eff898-5e5a-4d31-9327-f2ba5d5d1c34",
  ],
};

const cuota_admin = new Project(data);

export default cuota_admin;
