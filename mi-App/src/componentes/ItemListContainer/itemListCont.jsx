
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
//

import {doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'

import { gFetch } from '../../assets/fetchProds'
import { ItemList } from "./itemList"

const ItemListContainer = ( { saludo = 'BIENVENID@' } ) => { 
    const [ products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId}= useParams()
    
     useEffect(()=>{
         if (categoryId){

             gFetch().then(data => setProduct(data.filter(prod=>prod.cat==categoryId.toUpperCase()))).catch(err => console.log(err)).finally(()=> setLoading(false))
         }else{
             gFetch().then(data => setProduct(data)).catch(err => console.log(err)).finally(()=> setLoading(false))

         }
     }, [categoryId])


     
    //  useEffect(()=>{

    //      const db= getFirestore()
    //      const queryDoc= doc(db, 'products', 'FDWkVsfNIzRQvtNzW4Xt')
    //      getDoc(queryDoc).then(resp=>setProduct(resp.id))
    //  },[categoryId])

    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryDocuments= docs(db,'products')
    //     getDocs(queryDocuments).then(data=>setProduct(data.docs.map(product=>({id:product.id, ...product.data()}))))
    //     .catch(err=>console.log(err))

    // },[id])
    
    return (
        <section >        
            { loading ? <div style={{padding:120,textAlign:'center'}}>
                <h1 className="text-bg-primary">{saludo}!</h1>                
                    <br></br>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
            </div> : <ItemList productos={products}/>
         
        }            
        
        </section>
    )
}

export default ItemListContainer


//  products.map( product => <div style={{ margin: 50, maxWidth:450}} className='col-sm-8' key={product.id}>                                                        
//                                             <div className="card text-center w-100 mt-5" >
//                                                 <div className="card-header ">
//                                                     {`${product.name} - ${product.cat}`}
//                                                 </div>
//                                                 <div className="card-body ">
//                                                     <img src={product.pic} alt={product.name} className='w-50' />
//                                                     <Counter/> 
//                                                     <p className="card-text">Precio: $ {product.price} x unidad </p>
//                                                 </div>                                                
//                                                 <div className="card-footer">                                                        
//                                                     <button className="btn btn-outline-primary btn-block">
//                                                         detalles
//                                                     </button>
//                                                 </div>
//                                             </div>                                                    
//                                        </div> 
//                           ) 

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

