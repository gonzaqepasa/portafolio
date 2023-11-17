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
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export interface typesTech {
  name:
    | "css"
    | "express"
    | "firebase"
    | "git"
    | "html"
    | "javascript"
    | "mongodb"
    | "nextjs"
    | "node"
    | "postgres"
    | "react";
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
    { name: "mongodb", icon: mongoSvg },
    { name: "nextjs", icon: nextSvg },
    { name: "node", icon: nodeSvg },
    { name: "postgres", icon: postgresSvg },
    { name: "react", icon: reactSvg },
  ];

  public getAllTecnologies() {
    return this.technologies;
  }
  public getTechnologiesByName(names: typesTech["name"][]): typesTech[] {
    return this.technologies.filter((tech) => names.includes(tech.name));
  }
}

export default Tech;
