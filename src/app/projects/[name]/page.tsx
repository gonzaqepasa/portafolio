import allProjects from "@/Projects/allProjects";
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
  console.log(project);
  return (
    <main
      className={`min-h-[calc(100vh-20vh)] w-full flex flex-col items-center ${
        !project && "justify-center"
      } `}
    >
      {project ? (
        <div>{project.name}</div>
      ) : (
        <div className="text-center">
          <h3> No existe un proyecto con este nombre :C</h3>
          <p>Puede que te hayas equivocado</p>
          <Button className="m-3"  color="default" variant="shadow">
            <Link href={"/"}>Volver al Home</Link>
          </Button>
        </div>
      )}
    </main>
  );
};

export default PorjectsPage;
