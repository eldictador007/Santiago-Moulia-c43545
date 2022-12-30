import {createContext,useContext,useState } from 'react'

const CartContext = createContext( [] )

export const useCartContext = () =>  useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estado cartList 
    const [cartList, setCartList] = useState([])
    // modificar el cartList   

    const addToCart = (product) => {
        // si está?
        const idx = cartList.findIndex(prod => prod.id === product.id) //no esta -> -1
        
        if (idx !== -1) {
            // cartList[idx].cant = cartList[idx].cant + product.cant
            cartList[idx].cant +=  product.cant
            setCartList( [ ...cartList ] ) 
        } else {
            setCartList([...cartList, product]) // push
        }        
    }
    // precio total
    
    const totalPrice = () => cartList.reduce((contador, producto) => contador += (producto.price * producto.cant) , 0)
    
    // cantidad total
    const totalCount = () => cartList.reduce((contador, producto) => contador += producto.cant , 0)

    // vaciar el carrito
    const emptyCart = () => {
        setCartList([])
    }

    const deleteItem = (id) =>  {
        setCartList( cartList.filter(prod => prod.id !== id ) )
    }
    // inInCart
    // eliminar por item
    // cantidad total de product
    // precio total

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            totalCount,
            deleteItem
        }}>
            { children  }
        </CartContext.Provider>
    )
}