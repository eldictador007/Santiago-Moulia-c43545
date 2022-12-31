// import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Componentes/NavBar/navBar";
import ItemListContainer from "./Componentes/ItemListContainer/itemListCont";
import { ItemDetailContainer } from "./Componentes/itemDetailContainer/itemDetailCont";
import CartContainer from "./Componentes/CartContainer/cartContainer";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider value={{}}>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/:categoryId" element={<ItemListContainer />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
