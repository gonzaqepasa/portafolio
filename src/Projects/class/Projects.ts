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
  tech?: string[];
}

class Project {
  name: string;
  extendedDescription: string;
  description?: string;
  colorMain: typesMainColor;
  images?: string[];
  url?: string;
  urlGithub?: string;
  tech?: string[];

  constructor({
    name,
    description,
    images,
    colorMain,
    url,
    urlGithub,
    tech,
    extendedDescription,
  }: ProjectTypes) {
    this.name = name;
    this.description = description;
    this.extendedDescription = extendedDescription;
    this.images = images;
    this.colorMain = colorMain;
    this.url = url;
    this.urlGithub = urlGithub;
    this.tech = tech;
  }
}

export default Project;