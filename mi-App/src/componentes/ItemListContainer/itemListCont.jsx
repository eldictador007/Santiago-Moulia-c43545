import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

import { gFetch } from "../../assets/fetchProds";
import ItemList from "./itemList";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    if (categoryId) {
      gFetch()
        .then((data) =>
          setProducts(
            data.filter((prod) => prod.cat == categoryId.toUpperCase())
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((data) => setProducts(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  //  useEffect(()=>{
  //      const db= getFirestore()
  //      const queryDoc= doc(db, 'products', 'FDWkVsfNIzRQvtNzW4Xt')
  //      getDoc(queryDoc).then(resp=>setProducts(resp.id))
  //  },[categoryId])
  // useEffect(()=>{
  //     const db = getFirestore()
  //     const queryDocuments= docs(db,'products')
  //     getDocs(queryDocuments).then(data=>setProducts(data.docs.map(product=>({id:product.id, ...product.data()}))))
  //     .catch(err=>console.log(err))
  // },[id])
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
