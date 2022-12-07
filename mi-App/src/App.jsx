// import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './Componentes/NavBar/navBar'
import ItemListContainer from './Componentes/ItemListContainer/itemListCont'
import { ItemDetailContainer } from './Componentes/itemDetailContainer/itemDetailCont'
import {CartContainer} from './Componentes/CartContainer/cartContainer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  

  return (
    
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detalle/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<CartContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
       
       {/* </> */}
       </Routes>

       </BrowserRouter>
       
       
  )
}

export default App
