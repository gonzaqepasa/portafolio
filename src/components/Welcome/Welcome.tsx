import Image from "next/image";
import welcomeImgSvg from "@/utils/welcomeImg.svg";

export default function Welcome() {
  const currentYear = new Date().getFullYear();
  const birthYear = 1995;
  const age = currentYear - birthYear;
  return (
    <div
      id="welcome"
      className={`flex flex-col  w-full min-h-[calc(100vh-10vh)] px-5  md:px-0  items-center `}
    >
      <div className={`flex gap-1 text-center md:max-w-5xl my-10  `}>
        <h1 className="text-neutral-200 font-medium text-4xl md:text-5xl">
          Hola,👋 soy{" "}
          <i className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Gonzalo Martinez
          </i>
          , desarrollador fullstack{" "}
          <i className="text-yellow-400">Javascript</i>{" "}
        </h1>
      </div>

      <div className={` `}>
        <p>{`Hola, soy Gonzalo Martinez, desarrollador fullstack javascript nacido en Argentina, tengo ${age} años.`}</p>
        <p>{`Estoy capacitado para trabajar con las diferentes tecnologias javascript que se encuentran en npmjs.`}</p>
        <p>{`Algunas de las que utilizo actualmente son:`}</p>
      </div>
    </div>
  );
}
