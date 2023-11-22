function TextWelcome() {
  const currentYear = new Date().getFullYear();
  const startProgramming = 2020;
  const age = currentYear - startProgramming;
  return (
    <div className={`px-8 flex flex-col text-center text-neutral-400 `}>
      <i>{`Hola, mi nombre es Gonzalo Martinez, soy de Argentina y hace ${age} años estudio y practico tecnologias Javascript, tanto para el front-end como para el back-end.`}</i>
      <i>{`Me desenvuelvo agilmente haciendo uso de varios modulos que se encuentran en npmjs.`}</i>
      {/* <i>{`Estoy capacitado para trabajar con diferentes tecnologias javascript que se encuentran en npmjs.`}</i> */}
      {/* <i>{`Algunas de las que utilizo actualmente son:`}</i> */}
    </div>
  );
}

export default TextWelcome;
