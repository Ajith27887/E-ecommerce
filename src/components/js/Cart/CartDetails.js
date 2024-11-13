import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Provider/CartProvider';
// import { Container, Row, Col } from 'react-bootstrap'
import './CartDetails.scss'



const CartDetails = (props = {}) =>{
        const {name = '',image = '', caloriesPerServing = ''} = props,
            { itemCounts} = useContext(CartContext);

            console.log(itemCounts, "item");
            
        return (
            <div>
                <div className="mt-2">
                    <div className="container CartList">
                        <div className="row">
                            <div className="col-1 px-0">
                                <img style={{width : '100%'}} src={image}/>
                            </div>
                            <div className="col-11 p-3 Bill-container d-flex bold align-items-center justify-content-between">
                                <div className='Bill-Text'>
                                    <h4> Food Prize : </h4>
                                    <span>X {itemCounts[props.id] || 0}</span>
                                </div>
                                <h2>{name}</h2>
                                <div>
                                    <h6> {caloriesPerServing * itemCounts[props.id] } RS</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
}

export default CartDetails;