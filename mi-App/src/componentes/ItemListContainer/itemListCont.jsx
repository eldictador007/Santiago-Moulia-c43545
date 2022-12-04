import Counter from "../Contador/contador"
// import Titulo from "../Titulos/Titulo"

import {useState, useEffect} from 'react'
import { gFetch } from '../../assets/fetchProds'

// acciones  api -> resultado (asincrónico)

const ItemListContainer = ( { saludo = 'BIENVENID@' } ) => { 
    const [ products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        gFetch().then(data => setProduct(data)).catch(err => console.log(err)).finally(()=> setLoading(false))
    }, [])
    
    return (
        <section >        
            { loading ? <div style={{padding:120,textAlign:'center'}}>
                <h1 className="text-bg-primary">{saludo}!</h1>                
                    <br></br>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
            </div> : products.map( product => <div style={{ margin: 50, maxWidth:450}} className='col-sm-8' key={product.id}>                                                        
                                                    <div className="card text-center w-100 mt-5" >
                                                        <div className="card-header ">
                                                            {`${product.name} - ${product.cat}`}
                                                        </div>
                                                        <div className="card-body ">
                                                            <img src={product.pic} alt={product.name} className='w-50' />
                                                            <Counter/> 
                                                            <p className="card-text">Precio: $ {product.price} x unidad </p>
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

