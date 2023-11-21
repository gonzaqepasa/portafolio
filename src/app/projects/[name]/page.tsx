import allProjects from "@/Projects/allProjects";
import ProjectDescription from "@/components/ProjectView/ProjectDescription";
import ProjectTech from "@/components/ProjectView/ProjectTech";
import ProjectTitle from "@/components/ProjectView/ProjectTitle";
import ProjectUrls from "@/components/ProjectView/ProjectUrls";
import ProjectImages from "@/components/ProjectView/ProjectsImages";
import StateOfProjectText from "@/components/globals/StateOfProjectText";

import NoProject from "./no-project";

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
      className={`min-h-[calc(100vh-20vh)] py-10 w-full flex flex-col items-center `}
    >
      {project ? (
        <>
          <ProjectTitle name={project.name} />
          <StateOfProjectText state={project.getState()} />
          <ProjectDescription description={project.extendedDescription} />
          <ProjectUrls url={project.url} urlGithub={project.urlGithub} />
          <ProjectTech tech={project.tech} />
          <ProjectImages image={project.images} />
        </>
      ) : (
        <NoProject />
      )}
    </main>
  );
};

export default PorjectsPage;
