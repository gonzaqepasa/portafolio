import Project from "@/Projects/class/Projects";
import Link from "next/link";

// Componente a partir de aca
interface Props {
  p: Project;
}
const ProjectsLinkNav: React.FC<Props> = ({ p }) => {
  return (
    <Link
    
      className={`flex flex-col w-full p-1 rounded transition-colors ${String(
        p.returnColor()
      )} link-hover-effect hover:bg-neutral-700  `}
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
