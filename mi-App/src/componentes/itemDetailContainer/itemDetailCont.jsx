import { gFetch } from "../../assets/fetchProds";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./itemDetail";
import Loading from "../Loading/Loading";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
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
        <Loading greeting={"Obteniendo datos..."} />
      ) : (
        <ItemDetail product={item} />
      )}
    </>
  );
};
