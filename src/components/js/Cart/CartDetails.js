import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Provider/CartProvider';
// import { Container, Row, Col } from 'react-bootstrap'
import './CartDetails.scss'



const CartDetails = (props = {}) =>{
        const {name = '',image = '', caloriesPerServing = ''} = props,
            Tax = caloriesPerServing * (5 / 100),
            { cartData } = useContext(CartContext);
            

            
        return (
            <div>
                <div className="mt-5">
                    <div className="container CartList">
                        <div className="row">
                            <div className="col-3 px-0">
                                <img style={{width : '100%'}} src={image}/>
                            </div>
                            <div className="col-9 p-3 bold">
                                <h2>{name}</h2>
                                <div className='Bill-container'>
                                    <div className='Bill-Text'>
                                        <h4> Food Prize : </h4>
                                        <h4>Tax : </h4>
                                    </div>
                                    <div>
                                        <h6> {caloriesPerServing} RS</h6>
                                        <p> {Tax} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
}

export default CartDetails;