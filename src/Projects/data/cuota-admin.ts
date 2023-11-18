import Project, { ProjectTypes } from "../class/Projects";

const data: ProjectTypes = {
  name: "cuota-admin",
  extendedDescription:
    "Esta va a ser la descripcion general de todo el proyecto si o si requerida",
  description: "Sistema de control de cuotas para un gym",
  colorMain: "red",
  state: "En Producción",
};

const cuota_admin = new Project(data);

export default cuota_admin;
