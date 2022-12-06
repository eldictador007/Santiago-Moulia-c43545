import { Item } from "../ItemListContainer/item"
import { gFetch } from "../../assets/fetchProds"
import { useEffect, useState } from "react"


export const ItemDetailContainer=()=>{
    const [item,setItem]=useState([])
    const[loading,setLoading]=useState(true)
    
    return <>
    <Item product={item}/>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum quidem itaque a tempora sint corrupti ullam tenetur molestias dignissimos sit, quasi aut, inventore exercitationem accusamus alias, assumenda repudiandae delectus.</p>
    </>
}