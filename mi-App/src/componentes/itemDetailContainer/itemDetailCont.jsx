import { Item } from "../ItemListContainer/item"
import { gFetch } from "../../assets/fetchProds"
import { useEffect, useState } from "react"


export const ItemDetailContainer=()=>{
    const [item,setItem]=useState([])
    const[loading,setLoading]=useState(true)
    const useFetch= async()=>{
        try{
            const resp= await gFetch([0])
            const respJson= await resp.json()
            setItem(respJson)
        }catch(err){console.log(err)}finally{()=> setLoading(false)}
    }
    useEffect(()=>{useFetch()})
    return <>
    <Item product={item}/>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum quidem itaque a tempora sint corrupti ullam tenetur molestias dignissimos sit, quasi aut, inventore exercitationem accusamus alias, assumenda repudiandae delectus.</p>
    </>
}