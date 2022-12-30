import { useState } from "react"
import Counter from "../Contador/contador"
import { Link } from "react-router-dom"

export const ItemDetail =({product})=>{
    const [isCant, setIsCant ] = useState(false)

    const [cartList, setCartList] = useState([])
    // modificar el cartList

   

    const agregarCarrito = (product) => {
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
    
    const onAdd = (cant) => {
        console.log('la cantidad seleccionada es: ',cant)
        agregarCarrito( { ...product, cant } )
        setIsCant(true)
    }

    return(

        <div style={{ margin: '20px auto ', maxWidth:650,display:'flex',justifyContent:'center'}} className='col-sm-8' >                                                        
                                                    <div className="card text-center w-75 mt-5" >
                                                        <div className="card-header ">
                                                            {`${product.name} - ${product.cat}`}
                                                        </div>
                                                        <div className="card-body ">
                                                            <img src={product.pic} alt={product.name} className='img-fluid ' />
                                                           
                                                        </div>                                                
                                                        <div className="card-footer">        
                                                                                                        
                                                            <p className="card-text">Precio: $ {product.price} x unidad </p>

                                                            <div className="col">
                    {isCant ?
                    
                        <>
                            <Link to="/carrito">
                                <button className='btn bg-info p-3 m-5 fw-bolder'>Ir al carrtio</button>

                            </Link>
                            <Link to="/">
                                <button className='btn bg-warning p-3 m-5 fw-bolder'>Seguir comprando</button>
                            </Link>
                        </>
                    
                    :
                       <>
                       
                       <Counter stock={product.stock} onAdd={onAdd} /> 
                       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum quidem itaque a tempora sint corrupti ullam tenetur molestias dignissimos sit, quasi aut, inventore exercitationem accusamus alias, assumenda repudiandae delectus.</p>
                       </>
                    
                    }
                    {/* <Intercambiabilidad /> */}
                    {/* <Caso2 /> */}
                </div>
                                                        </div>
                                                    </div>                                                    
                                               </div> 
                                               
       
    )
}