function TextWelcome() {
  const currentYear = new Date().getFullYear();
  const birthYear = 1995;
  const age = currentYear - birthYear;
  return (
    <div className={`px-5 flex flex-col text-center text-neutral-400 `}>
      <i>{`Hola, mi nombre es Gonzalo Martinez, tengo ${age} años y naci en Argentina`}</i>
      <i>{`Estoy capacitado para trabajar con las diferentes tecnologias javascript que se encuentran en npmjs.`}</i>
      <i>{`Algunas de las que utilizo actualmente son:`}</i>
    </div>
  );
}

export default TextWelcome;
