import React, { useContext } from 'react';
import './index.css'
import { CartContext } from './CartContext';


export const Home = () => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const tshirt = { name: props.name, price: props.price,id:uniqid() };
        setCart(currentState => [...currentState, tshirt]);
      }
    
    const database = [
        { name: "Carman salas brown", price: 10.99, id: 1,pic:'brown.jpg' },
        { name: "Carman salas pink", price: 24.05, id: 2,pic:'pink.jpg'},
        { name: "Carman salas burgundy", price: 18.01, id: 3,pic:'burgundy.jpg' },
        { name: "Carman salas print", price: 12.00, id: 4,pic:'print.jpg' },
        { name: "Carman salas check", price: 12.00, id: 5,pic:'check.jpg' },
        { name: "Carman salas dark green", price: 12.00, id: 6 ,pic:'dark-green.jpg'},
      ]
    

        let itemList = database.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            {/* <img src={item.pic} alt={item.name}/> */}
                            <span className="card-title">{item.name}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{addToCart}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            {/* <p>{item.desc}</p> */}
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our products</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }

export default Home;