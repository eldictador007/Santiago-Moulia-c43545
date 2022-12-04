import Counter from "../Contador/contador"
import Titulo from "../Titulos/Titulo"

import {useState, useEffect} from 'react'
import { gFetch } from '../../assets/gFetch'

// acciones  api -> resultado (asincrónico)

const ItemListContainer = ( { saludo = 'saludo por defecto' } ) => { 
    const [ products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        gFetch().then(data => setProduct(data)).catch(err => console.log(err)).finally(()=> setLoading(false))
    }, [])
    
    return (
        <section >        
            { loading ? <h2>loading...😅</h2> : products.map( product =>  
                                                <div            
                                                    style={{ marginLeft: 100}}
                                                    className='col-md-3'
                                                    key={product.id}
                                                >                                                        
                                                    <div className="card w-100 mt-5" >
                                                        <div className="card-header ">
                                                            {`${product.name} - ${product.categoria}`}
                                                        </div>
                                                        <div className="card-body ">
                                                            <img src={product.foto} alt='' className='w-50' />
                                                              - $ {product.price}                                                            
                                                        </div>                                                
                                                        <div className="card-footer">                                                        
                                                            <button className="btn btn-outline-primary btn-block">
                                                                detalles
                                                            </button>
                                                        </div>
                                                    </div>                                                                   
                                                    
                                                </div> 
                        ) 
            }            
        
        </section>
    )
}

export default ItemListContainer


// const Item = ({  greeting }) => {
//     let tituloApp = 'BIENVENID@!' 
//     const saludo = () => console.log('Hola')
//     return (
//       <div>
//         <Titulo 
//           titulo={tituloApp} 
//           subTitulo={'Sitio en construccion...'} 
//         />
//         <p>{greeting}</p>
//         <button onClick={ saludo } >Entrar</button>
//         <br />
//         <br />
//         <Counter/>
//       </div>
//     )
//   }

//     export default Item

