import { Link } from "react-router-dom";
import { useState } from "react";
import Counter from "../Contador/contador";
import { useCartContext } from "../../context/cartContext";

export const ItemDetail = ({ product }) => {
  const [isCant, setIsCant] = useState(false);
  const { addToCart } = useCartContext();
  const onAdd = (cant) => {
    addToCart({ ...product, cant });
    setIsCant(true);
  };
  return (
    <div
      style={{
        margin: "20px auto ",
        maxWidth: 650,
        display: "flex",
        justifyContent: "center",
      }}
      className="col-sm-8"
    >
      <div className="card text-center w-75 mt-5">
        <div className="card-header ">{`${product.name} - ${product.cat}`}</div>
        <div className="card-body ">
          <img src={product.pic} alt={product.name} className="img-fluid " />
        </div>
        <div className="card-footer">
          <p className="card-text">Precio: $ {product.price} x unidad </p>

          <div className="col">
            {isCant ? (
              <>
                <Link to="/carrito">
                  <button className="btn bg-info p-3 m-5 fw-bolder">
                    Ir al carrtio
                  </button>
                </Link>
                <Link to="/">
                  <button className="btn bg-warning p-3 m-5 fw-bolder">
                    Seguir comprando
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Counter stock={product.stock} initial={1} onAdd={onAdd} />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  dolorum quidem itaque a tempora sint corrupti ullam tenetur
                  molestias dignissimos sit, quasi aut, inventore exercitationem
                  accusamus alias, assumenda repudiandae delectus.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}