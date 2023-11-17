import Project, { ProjectTypes } from "../class/Projects";

const data: ProjectTypes = {
  name: "Share It",
  extendedDescription:
    "Esta va a ser la descripcion general de todo el proyecto si o si requerida",
  description: "Red social realizada en Henry para rendir final",
  colorMain: "yellow",
};

const share_it = new Project(data);

export default share_it;
