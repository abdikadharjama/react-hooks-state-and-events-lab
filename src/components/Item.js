import React, { useState } from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <button onClick={() => setInCart(!inCart)}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
