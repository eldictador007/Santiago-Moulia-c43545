import { Item } from "../ItemListContainer/item"
import { gFetch } from "../../assets/fetchProds"
import { useEffect, useState } from "react"
import Counter from "../Contador/contador"
import { useParams } from "react-router-dom"


export const ItemDetailContainer=()=>{
    const [item,setItem]=useState([])
    
    const [loading, setLoading] = useState(true)
    const {itemId}= useParams()
    
    useEffect(()=>{
        gFetch().then(data => setItem(data.find(prod=>prod.id==itemId))).catch(err => console.log(err)).finally(()=> setLoading(false))
    }, [])
    
    return <>
        { loading ? <div style={{padding:120,textAlign:'center'}}>
                
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
            </div> : <Item product={item}/>
         
        }            
    
    <Counter stock={item.stock}/> 
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum quidem itaque a tempora sint corrupti ullam tenetur molestias dignissimos sit, quasi aut, inventore exercitationem accusamus alias, assumenda repudiandae delectus.</p>
    </>
}