function TitleWelcome() {
  return (
    <div className={`flex gap-1 text-center md:max-w-4xl px-5  my-8  `}>
      <h1 className="text-neutral-200 font-medium text-3xl md:text-5xl">
        Hola,👋 soy{" "}
        <i className="whitespace-nowrap bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Gonzalo Martinez
        </i>
        , desarrollador fullstack <i className="text-yellow-400">Javascript</i>{" "}
      </h1>
    </div>
  );
}

export default TitleWelcome;
