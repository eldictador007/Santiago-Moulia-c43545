import { Item } from "../ItemListContainer/item";
import { gFetch } from "../../assets/fetchProds";
import { useEffect, useState } from "react";
import Counter from "../Contador/contador";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./itemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  // useEffect(()=>{
  //     gFetch().then(data => setItem(data.find(prod=>prod.id==itemId))).catch(err => console.log(err)).finally(()=> setLoading(false))
  // }, [itemId])
  // console.log(item)

  useEffect(() => {
    if (setItem) {
      gFetch()
        .then((data) => setItem(data.find((prod) => prod.id == itemId)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((data) => setItem(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [setItem]);

  return (
    <>
      {loading ? (
        <div style={{ padding: 120, textAlign: "center" }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemDetail product={item} />
      )}
    </>
  );
};
