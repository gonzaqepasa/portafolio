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

  public returnColor = (): string => {
    const colorVariants: Record<typesMainColor, string> = {
      cyan: "text-cyan-500 before:bg-cyan-500 ",
      red: "text-red-600 before:bg-red-500 ",
      yellow: "text-yellow-600 before:bg-yellow-500 ",
      green: "text-yellow-600 before:bg-yellow-500 ",
      orange: "text-yellow-600 before:bg-yellow-500 ",
      purple: "text-yellow-600 before:bg-yellow-500 ",
      violet: "text-yellow-600 before:bg-yellow-500 ",
    };
    return colorVariants[this.colorMain] || "";
  };
}

export default Project;
