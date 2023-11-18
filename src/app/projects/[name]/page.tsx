import allProjects from "@/Projects/allProjects";
import { ProjectTypes } from "@/Projects/class/Projects";
import ProjectDescription from "@/components/ProjectView/ProjectDescription";
import ProjectTech from "@/components/ProjectView/ProjectTech";
import ProjectTitle from "@/components/ProjectView/ProjectTitle";
import ProjectUrls from "@/components/ProjectView/ProjectUrls";
import ProjectImages from "@/components/ProjectView/ProjectsImages";
import StateOfProjectText from "@/components/globals/StateOfProjectText";
import InProductiontext from "@/components/globals/StateOfProjectText";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  params: {
    name: string;
  };
}

const PorjectsPage: React.FC<Props> = ({ params }) => {
  const project = allProjects.find(
    (p) => p.name === decodeURIComponent(params.name)
  );

  return (
    <main
      className={`min-h-[calc(100vh-20vh)] py-10 w-full flex flex-col items-center ${
        !project && "justify-center"
      } `}
    >
      {project ? (
        <>
          <ProjectTitle name={project.name} />
          <StateOfProjectText state={project.getState()} />
          <ProjectDescription description={project.extendedDescription} />
          <ProjectUrls url={project.url} urlGithub={project.urlGithub} />
          <ProjectTech tech={project.tech} />
          <ProjectImages />
        </>
      ) : (
        <div className="text-center">
          <h3> No existe un proyecto con este nombre :C</h3>
          <p>Puede que te hayas equivocado</p>
          <Button className="m-3" color="default" variant="shadow">
            <Link href={"/"}>Volver al Home</Link>
          </Button>
        </div>
      )}
    </main>
  );
};

export default PorjectsPage;
