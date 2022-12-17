
import { Item } from "./item"



export const ItemList=({productos})=>{
    return productos.map(prod=>{return <Item key={prod.id} product={prod} />})
}