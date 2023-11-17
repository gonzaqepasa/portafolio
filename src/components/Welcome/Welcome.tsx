import CarouselHome from "./CarouselHome";
import TitleWelcome from "./TitleWelcome";
import TextWelcome from "./TextWelcome";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className={`flex flex-col  w-full md:min-h-[calc(100vh-10vh)] min-h-[calc(100vh-20vh)] md:px-0  items-center justify-evenly`}
    >
      <TitleWelcome />
      <TextWelcome />
      <CarouselHome />
    </section>
  );
}