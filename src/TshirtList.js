import React from 'react';
import { Tshirt } from './Tshirt';
import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';
import item3 from './images/item3.jpg';
import item4 from './images/item4.jpg';
import item5 from './images/item5.jpg';
import item6 from './images/item6.jpg';
export const TshirtList = () => {

  const database = [
    { name: "Carman salas brown", price: 10.99, id: 1,pic:item1 },
    { name: "Carman salas pink", price: 24.05, id: 2,pic:item2},
    { name: "Carman salas burgundy", price: 18.01, id: 3,pic:item3 },
    { name: "Carman salas print", price: 12.00, id: 4,pic:item4 },
    { name: "Carman salas check", price: 12.00, id: 5,pic:item5 },
    { name: "Carman salas dark green", price: 12.00, id: 6 ,pic:item6},
  ]

  return (
    <div className='t-list'>
      {
        database.map(item => (
          <Tshirt name={item.name} price={item.price} pic={item.pic} key={item.id} />
        ))
      }
    </div>
  )
}