import React, { useState, useEffect } from 'react';


function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;  },[]);
    return (
      <div>
        <h4>Hiciste {count} compras!</h4>
        <button onClick={() => setCount(count + 1)}>
          Comprar
        </button>
      </div>
    );
  }
export default Counter
