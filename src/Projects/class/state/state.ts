export type typesProjectState =
  | { color: "green"; val: "En Producción" }
  | { color: "orange"; val: "En Construcción" }
  | { color: "orange"; val: "En Mantenimiento" }
  | { color: "cyan"; val: "Versión Beta" };

export function returnState(str: typesProjectState["val"]): typesProjectState {
  switch (str) {
    case "En Producción":
      return {
        color: "green",
        val: "En Producción",
      };

    case "En Construcción":
      return {
        color: "orange",
        val: "En Construcción",
      };
    case "En Mantenimiento":
      return {
        color: "orange",
        val: "En Mantenimiento",
      };
    case "Versión Beta":
      return {
        color: "cyan",
        val: "Versión Beta",
      };
  }
}
