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
        <div className="flex flex-wrap items-center justify-end my-5 gap-4 w-11/12 max-w-5xl">
          {techs.getTechnologiesByName(tech).map((t, i) => (
            <div key={i} className={`relative h-10 w-10`}>
              <Image fill src={t.icon} alt={t.name} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectTech;
