import { typesTech } from "@/Techs/class/Tech";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { returnState, typesProjectState } from "./state/state";
import { FcApproval, FcServices, FcHighPriority } from "react-icons/fc";

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
  state: typesProjectState["val"];
}
//////// AQUI COMIENZA LA CLASE ////////
class Project {
  name: string;
  extendedDescription: string;
  description?: string;
  colorMain: typesMainColor;
  images?: string[];
  url?: string;
  urlGithub?: string;
  tech?: typesTech["name"][];
  private state: typesProjectState["val"];

  constructor({
    name,
    description,
    images,
    colorMain,
    url,
    urlGithub,
    tech,
    extendedDescription,
    state,
  }: ProjectTypes) {
    this.name = name;
    this.description = description;
    this.extendedDescription = extendedDescription;
    this.images = images;
    this.colorMain = colorMain;
    this.url = url;
    this.urlGithub = urlGithub;
    this.tech = tech;
    this.state = state;
  }

  public getState() {
    return returnState(this.state);
  }
}

export default Project;
