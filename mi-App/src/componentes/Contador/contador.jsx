import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';

//  import CartWidget from '../CartWidget/CartWidget';

function Counter() {
    const [count, setCount] = useState(0);    
    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    //     },[]);
    return (
      <div>
        <button className='btn bg-warning p-2 m-3 fw-bolder' onClick={() => setCount(count - 1)}> - </button>        
       <Badge id='counter' bg="dark" pill='true' text="light">{count}</Badge> 
        <button className='btn bg-success p-2 m-3 fw-bolder' onClick={() => setCount(count + 1)}> + </button>
      </div>
    );
  }
export default Counter
