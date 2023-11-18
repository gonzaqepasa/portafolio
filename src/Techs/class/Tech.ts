import cssSvg from "@/utils/images/tecnologies/css-3.svg";
import expressSvg from "@/utils/images/tecnologies/express.svg";
import firebaseSvg from "@/utils/images/tecnologies/firebase.svg";
import gitSvg from "@/utils/images/tecnologies/git.svg";
import htmlSvg from "@/utils/images/tecnologies/html-5.svg";
import javascriptSvg from "@/utils/images/tecnologies/javascript.svg";
import mongoSvg from "@/utils/images/tecnologies/mongodb.svg";
import nextSvg from "@/utils/images/tecnologies/nextjs.svg";
import nodeSvg from "@/utils/images/tecnologies/nodejs.svg";
import postgresSvg from "@/utils/images/tecnologies/postgresql.svg";
import reactSvg from "@/utils/images/tecnologies/react.svg";
import reduxSvg from "@/utils/images/tecnologies/redux.svg";
import typescriptSvg from "@/utils/images/tecnologies/typescript.svg";
import sassSvg from "@/utils/images/tecnologies/sass.svg";
import tailwindSvg from "@/utils/images/tecnologies/tailwindcss.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export interface typesTech {
  name:
    | "css"
    | "express"
    | "firebase"
    | "git"
    | "html"
    | "javascript"
    | "typescript"
    | "mongodb"
    | "nextjs"
    | "node"
    | "postgres"
    | "react"
    | "sass"
    | "tailwind"
    | "redux";

  icon: StaticImport;
}
class Tech {
  private technologies: typesTech[] = [
    { name: "css", icon: cssSvg },
    { name: "express", icon: expressSvg },
    { name: "firebase", icon: firebaseSvg },
    { name: "git", icon: gitSvg },
    { name: "html", icon: htmlSvg },
    { name: "javascript", icon: javascriptSvg },
    { name: "typescript", icon: typescriptSvg },
    { name: "mongodb", icon: mongoSvg },
    { name: "nextjs", icon: nextSvg },
    { name: "node", icon: nodeSvg },
    { name: "postgres", icon: postgresSvg },
    { name: "react", icon: reactSvg },
    { name: "redux", icon: reduxSvg },
    { name: "sass", icon: sassSvg },
    { name: "tailwind", icon: tailwindSvg },
  ];

  public getAllTecnologies() {
    return this.technologies;
  }
  public getTechnologiesByName(names: typesTech["name"][]): typesTech[] {
    return this.technologies.filter((tech) => names.includes(tech.name));
  }
}

export default Tech;
