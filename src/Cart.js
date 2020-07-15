import React, {useContext} from 'react';
import {CartContext} from './CartContext';
// import {Link} from "react-router-dom";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className='cart-box'>
      {/* <h3>Cart summary</h3> */}
      <span>items: {cart.length}</span>
      <br />
      <span>total: {totalPrice}</span>
      <br />
      {/* <Link to="/cart">view cart</Link> */}
    </div>
  )
}