import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';

//  import CartWidget from '../CartWidget/CartWidget';

function Counter({stock}) {
    const [count, setCount] = useState(1);    
    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    //     },[]);
    return (
      <div className='container'>
        
        <button className='btn bg-warning p-2 m-3 fw-bolder' onClick={() => count>0? setCount(count - 1): alert('No es posible realizar esa operacion')}> - </button>        
       <Badge id='counter' bg="dark" pill='true' text="light">{count}</Badge> 
        <button className='btn bg-success p-2 m-3 fw-bolder' onClick={() => count<stock? setCount(count + 1): alert('Lo sentimos, no hay mas aticulos disponbles')}> + </button>
        
        <br></br>
        <button className='btn bg-info p-3 m-5 fw-bolder' onClick={() => alert(`Agregaste ${count} productos al carro!`)}>Agregar al Carrito</button>
      </div>
    );
  }
export default Counter
