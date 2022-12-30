import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

export const CartContainer = () => {
  const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext();
  console.log(cartList);
  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          <ul className="list-group">
            {cartList.map((prod) => (
              <li key={prod.id} className="list-group-item">
                <div className="card">
                  <img src={prod.pic} alt="" className="w-25" />
                  <div className="card-body">
                    <h5 className="card-title">
                      {prod.name} - {prod.cat}
                    </h5>
                    <p className="card-text">
                      Precio por unidad: ${prod.price} <br></br> Cantidad
                      seleccionada: {prod.cant}
                    </p>

                    <button
                      onClick={() => deleteItem(prod.id)}
                      className="btn btn-info"
                    >
                      Quitar elemento
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ padding: 15 }}>
            <h2>Precio total: ${totalPrice()} </h2>
            <button
              className="btn bg-danger p-3 m-3 fw-bolder"
              onClick={emptyCart}
            >
              Vaciar carrito
            </button>
            <button
              className="btn bg-success p-3 m-3 fw-bolder"
              onClick={emptyCart}
            >
              Finalizar compra!
            </button>
          </div>
        </>
      ) : (
        <>
          <h3  style={{ padding: 15 }}>Tu carrito esta vacio!</h3>
          <Link to="/">
            <button className="btn bg-info p-3 m-3 fw-bolder">
              Ir al Inicio
            </button>
          </Link>
        </>
      )}
    </div>
  );
};
