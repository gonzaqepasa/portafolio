import Tech, { typesTech } from "@/Techs/class/Tech";
import Image from "next/image";

interface Props {
  tech?: typesTech["name"][];
}
const ProjectTech: React.FC<Props> = ({ tech }) => {
  const techs = new Tech();
  return (
    <>
      {tech && (
        <div className="flex flex-wrap items-center justify-end mb-10 gap-4 w-11/12 max-w-5xl">
          {techs.getTechnologiesByName(tech).map((t, i) => (
            <div key={i} className={`relative h-7 w-7 sm:h-9 sm:w-9`}>
              <Image fill src={t.icon} alt={t.name} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectTech;
