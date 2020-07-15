import React, { useContext } from 'react';
import { CartContext } from './CartContext';
var uniqid = require('uniqid');
export const Tshirt = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = { name: props.name, price: props.price,id:uniqid() };
    setCart(currentState => [...currentState, tshirt]);
  }
  console.log(props.pic)
  return (
    <div className='tshirt-box'>
      <img src={props.pic} alt='shoes' className='product-pic' />
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button onClick={addToCart} className='btn'>Add to cart</button>
      {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={addToCart}><i className="material-icons">add</i></span> */}

    </div>
  )
}