import React, {useContext} from 'react';
import {CartContext} from './CartContext';
 const CartItem = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const delItem = (id) =>{
    let newCart=cart.filter((item)=>item.id!=id);
    console.log(newCart)
    setCart([...newCart])
    } //
  return (
    <div className='cart-box'>
      <h3>Your Items</h3>
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>price</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
        {cart.map((item,index)=>{
            return (
              <tr key={item.id} className='item-row'>
                <td className='product'>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>{delItem(item.id)}}>x</button></td>
                </tr>)
        })
        }
        <tr className='sub-total'>{totalPrice}</tr>
        </tbody></table>
    </div>
  )
}
export default CartItem;