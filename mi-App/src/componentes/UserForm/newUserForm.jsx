import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { useCartContext } from "../../context/cartContext";

function UserForm() {
  const [dataForm, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { cartList, totalPrice, emptyCart } = useCartContext();
  const addOrder = (e) => {
    e.preventDefault();
    const order = {};
    order.buyer = dataForm;
    order.price = totalPrice();
    order.date= Date()
    order.items = cartList.map(({ id, price, name }) => ({ id, price, name }));
    const db = getFirestore();
    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => emptyCart());
  };
  const handleOnChange = (e) => {
    setFormData({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={addOrder}>
        <div className="card input-group p-4 mb-5 ">
          <h5>Completa el formulario para finalizar tu compra.</h5>
          <div className="m-3">
            <input
              className="form-control"
              type="text"
              onChange={handleOnChange}
              name="name"
              value={dataForm.name}
              placeholder="Tu nombre completo"
            />
          </div>
          <div className="m-3">
            <input
              className="form-control"
              type="text"
              onChange={handleOnChange}
              name="phone"
              value={dataForm.phone}
              placeholder="Ingresa tu numero de telefono"
            />
          </div>
          <div className="m-3">
            <input
              className="form-control"
              type="text"
              onChange={handleOnChange}
              name="email"
              value={dataForm.email}
              placeholder="tucorreo@ejemplo.com"
            />
            <input
              className="form-control"
              type="text"
              onChange={handleOnChange}
              name="email"
              value={dataForm.emailConfirm}
              placeholder="Verifica tu E-mail"
            />
          </div>
          <button className="btn bg-info p-3 m-3 fw-bolder">
            Terminar Compra
          </button>
        </div>
      </form>
    </>
  );
}
export default UserForm;
