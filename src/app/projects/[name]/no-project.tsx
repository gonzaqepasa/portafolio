import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import NoProjectImage from "./no-project-img.svg";
const NoProject = () => {
  return (
    <div
      className={`flex flex-col min-h-[calc(100vh-30vh)] w-full items-center justify-center`}
    >
      <Image height={150} src={NoProjectImage} alt="Error" />
      <div className="text-center">
        <h3> No existe un proyecto con este nombre :C</h3>
        <p>Puede que te hayas equivocado</p>
        <Button className="m-3" color="default" variant="shadow">
          <Link href={"/"}>Volver al Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NoProject;
