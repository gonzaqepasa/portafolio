import CarouselHome from "./CarouselHome";
import TitleWelcome from "./TitleWelcome";
import TextWelcome from "./TextWelcome";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className={`flex flex-col  w-full md:  md:px-0  items-center justify-start`}
    >
      <TitleWelcome />
      <TextWelcome />
      <CarouselHome />
    </section>
  );
}
