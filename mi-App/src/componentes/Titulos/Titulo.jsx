function Titulo({
  titulo = "titulo por defecto",
  subTitulo = "Subtitulo por defecto",
}) {
  return (
    <div>
      <h1>{titulo}</h1>
      <h3>{subTitulo}</h3>
    </div>
  );
}
export default Titulo;
