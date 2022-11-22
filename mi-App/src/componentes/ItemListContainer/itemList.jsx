import Counter from "../Contador/contador"
import Titulo from "../Titulos/Titulo"

const Item = ({  greeting }) => {
    let tituloApp = 'BIENVENID@!' 
    const saludo = () => console.log('Hola')
    return (
      <div>
        <Titulo 
          titulo={tituloApp} 
          subTitulo={'Sitio en construccion...'} 
        />
        <p>{greeting}</p>
        <button onClick={ saludo } >Entrar</button>
        <br />
        <br />
        <Counter/>
      </div>
    )
  }

    export default Item