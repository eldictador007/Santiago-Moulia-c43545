// import './App.css'

import {BrowserRouter} from 'react-router-dom'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/itemListCont'
import { ItemDetailContainer } from './Componentes/itemDetailContainer/itemDetailCont'


function App() {
  

  return (
    <>
     <NavBar/>
       <ItemListContainer/>
       <ItemDetailContainer/>
       
       </>
  )
}

export default App
