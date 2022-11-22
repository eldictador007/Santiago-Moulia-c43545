

import NavBar from './Componentes/NavBar/NavBar'
import Item from './Componentes/ItemListContainer/itemList'
import './App.css'

function App() {
  

  return (
    <div className="App">
     <NavBar/>
     <br />
     <Item greeting={'Muy pronto podras hacer una compra'} />
    </div>
  )
}

export default App
