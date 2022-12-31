import { memo } from "react";
import  Item  from "./item";

const ItemList = memo( ({ products }) => {
    return (
      <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      >
      {products.map(prod => 
        <Item key={prod.id} product={prod} />
        )}
    </div>
  );
}) 
export default ItemList;
