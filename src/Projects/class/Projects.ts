import { typesTech } from "@/Techs/class/Tech";

export type typesMainColor =
  | "cyan"
  | "red"
  | "green"
  | "violet"
  | "orange"
  | "purple"
  | "yellow";
export interface ProjectTypes {
  name: string;
  colorMain: typesMainColor;
  extendedDescription: string;
  description?: string;
  images?: string[];
  url?: string;
  urlGithub?: string;
  tech?: typesTech["name"][];
  production?: boolean;
}

class Project {
  name: string;
  extendedDescription: string;
  description?: string;
  colorMain: typesMainColor;
  images?: string[];
  url?: string;
  urlGithub?: string;
  tech?: typesTech["name"][];
  production?: boolean;

  constructor({
    name,
    description,
    images,
    colorMain,
    url,
    urlGithub,
    tech,
    extendedDescription,
    production,
  }: ProjectTypes) {
    this.name = name;
    this.description = description;
    this.extendedDescription = extendedDescription;
    this.images = images;
    this.colorMain = colorMain;
    this.url = url;
    this.urlGithub = urlGithub;
    this.tech = tech;
    this.production = production;
  }
}

export default Project;
