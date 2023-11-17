import Project, { typesMainColor } from "@/Projects/class/Projects";
import Link from "next/link";

const returnColor = (str: typesMainColor): string => {
  const colorVariants: Record<typesMainColor, string> = {
    cyan: "text-cyan-400 before:bg-cyan-400 ",
    red: "text-red-500 before:bg-red-500 ",
    yellow: "text-yellow-400 before:bg-yellow-400 ",
    green: "text-yellow-600 before:bg-yellow-500 ",
    orange: "text-yellow-600 before:bg-yellow-500 ",
    purple: "text-yellow-600 before:bg-yellow-500 ",
    violet: "text-yellow-600 before:bg-yellow-500 ",
  };
  return colorVariants[str] || "";
};

// Componente a partir de aca
interface Props {
  p: Project;
}
const ProjectsLinkNav: React.FC<Props> = ({ p }) => {
  return (
    <Link
      className={`flex flex-col w-full p-1 rounded transition-colors ${returnColor(
        p.colorMain
      )} link-hover-effect hover:bg-neutral-700/50  `}
      href={`/projects/${p.name}`}
    >
      {p.name}
      {p.description && (
        <i className="text-xs text-neutral-400">{p.description}</i>
      )}
    </Link>
  );
};

export default ProjectsLinkNav;
