import { Item } from "../ItemListContainer/item"
import { gFetch } from "../../assets/fetchProds"
import { useEffect, useState } from "react"
import Counter from "../Contador/contador"


export const ItemDetailContainer=()=>{
    const [item,setItem]=useState([])
    
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        gFetch().then(data => setItem(data)).catch(err => console.log(err)).finally(()=> setLoading(false))
    }, [])
    
    return <>
    <Item product={item[0]}/>
    <Counter/> 
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum quidem itaque a tempora sint corrupti ullam tenetur molestias dignissimos sit, quasi aut, inventore exercitationem accusamus alias, assumenda repudiandae delectus.</p>
    </>
}