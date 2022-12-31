import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { ItemDetail } from "./itemDetail";
import Loading from "../Loading/Loading";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "prods", itemId);
    getDoc(queryDoc)
      .then((resp) => setItem({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [itemId]);
  return (
    <>
      {loading ? (
        <Loading greeting={"Obteniendo datos..."} />
      ) : (
        <ItemDetail product={item} />
      )}
    </>
  );
};
