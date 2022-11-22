
import Counter from './Componentes/Contador/contador'
import CollapsibleExample from './Componentes/NavBar/NavBar'
import './App.css'
import Item from './Componentes/ItemListContainer/itemList'

function App() {
  

  return (
    <div className="App">
     <CollapsibleExample/>
     <br />
     <Item/>
     <br />
     <Counter/>
    </div>
  )
}

export default App
