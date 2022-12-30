import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCartContext } from '../../context/cartContext';

function UserForm() {

    const {cartList}= useCartContext()
    console.log(cartList)
    // const checkOut=()=>{
    //     const cashIn={
    //         ...cartList,
    //         userData:{
    //             userName,
    //             mail,
    //             phone                
    //         },
    //         date,
    //         subb
    //     }
        
    // }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="name" placeholder="Juan Perez" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion de correo electronico</Form.Label>
        <Form.Control type="email" placeholder="tumail@ejemplo.com" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="phone" placeholder="02405686" />
        <Form.Text className="text-muted">
          Respetamos tu privacidad, tus datos no seran publicados por este sitio.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Subribirme a ofertas y noticias!" />
      </Form.Group>
      <Button className="m-3"  variant="info" type="submit">
        Confirmar
      </Button>
    </Form>
  );
}

export default UserForm;