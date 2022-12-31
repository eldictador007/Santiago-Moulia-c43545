import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  
  const addToCart = ( product ) => {
      const isInCart=()=>cartList.findIndex(prod => prod.id === product.id)
      const idx = isInCart();
      
      if (idx !== -1) {
          cartList[idx].cant += product.cant;
          setCartList([...cartList]);
        } else {
            setCartList([...cartList, product]);
        }
        
    };
  const totalPrice = () =>
    cartList.reduce(
      (count, prod) => (count += prod.price * prod.cant),
      0
    );

  const totalCount = () =>
    cartList.reduce((count, prod) => (count += prod.cant), 0);

  const emptyCart = () => {
    setCartList([]);
  };
  const deleteItem = (id) => {
    setCartList(cartList.filter(prod => prod.id !== id));
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        totalPrice,
        totalCount,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
