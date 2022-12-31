import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./itemList";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "prods");
    const filteredQuery = categoryId ? query(queryCollection,
      where("cat", "==", categoryId.toUpperCase())): queryCollection
      getDocs(filteredQuery)
        .then((data) =>
          setProducts(
            data.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))    
  }, [categoryId]);

  return (
    <section>
      {loading ? (
        <Loading greeting="BIENVENID@!" />
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
};
export default ItemListContainer;
