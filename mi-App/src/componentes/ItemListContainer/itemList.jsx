
import { Item } from "./item"



export const ItemList=({productos})=>{
    return productos.map(prod=>{return <Item product={prod} key={prod.id}/>})
}