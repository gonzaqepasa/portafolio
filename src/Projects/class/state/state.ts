import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  FcApproval,
  FcBarChart,
  FcServices,
  FcExpired,
  FcVlc,
} from "react-icons/fc";

export type typesProjectState =
  | { color: "green"; val: "En Producción"; icon: StaticImport }
  | { color: "orange"; val: "En Pruebas"; icon: StaticImport }
  | { color: "orange"; val: "En Construcción"; icon: StaticImport }
  | { color: "orange"; val: "En Mantenimiento"; icon: StaticImport }
  | { color: "cyan"; val: "Versión Beta"; icon: StaticImport };

export function returnState(str: typesProjectState["val"]): typesProjectState {
  switch (str) {
    case "En Producción":
      return {
        color: "green",
        val: "En Producción",
        icon: FcApproval,
      };
    case "En Pruebas":
      return {
        color: "orange",
        val: "En Pruebas",
        icon: FcExpired,
      };
    case "En Construcción":
      return {
        color: "orange",
        val: "En Construcción",
        icon: FcServices,
      };
    case "En Mantenimiento":
      return {
        color: "orange",
        val: "En Mantenimiento",
        icon: FcVlc,
      };
    case "Versión Beta":
      return {
        color: "cyan",
        val: "Versión Beta",
        icon: FcBarChart,
      };
  }
}
