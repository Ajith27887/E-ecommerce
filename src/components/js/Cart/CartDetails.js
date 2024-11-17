import { useContext , useCallback, useEffect} from 'react';
import { CartContext } from '../Provider/CartProvider';
import { FaMinus } from "react-icons/fa"; 

import './CartDetails.scss'

const CartDetails = (props = {}) =>{
        const {name = '',image = '', caloriesPerServing = ''} = props,
            { itemCounts, setItemCounts,filterData,setFilterData, cartData, setTotal , total } = useContext(CartContext),
            handleMinus = useCallback (() =>{
                setItemCounts(prevItemCounts => {
                    
                    const updatedItemCounts = { ...prevItemCounts };
                    console.log(updatedItemCounts,'updatedItemCounts');
                    if (updatedItemCounts[props.id]) {
                        updatedItemCounts[props.id] -= 1;
                        if(updatedItemCounts[props.id] === 0){
                            setFilterData(filterData.filter(crr => crr.id !== props.id));    
                        }
                    }
                    return updatedItemCounts;
                });
            },[filterData]);

        useEffect(() =>{
            setTotal(total - props.caloriesPerServing);   
        },[itemCounts])

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
                                </div>
                                <h2>{name}</h2>
                                <div className="d-flex align-items-center">
                                    <h6> <span className='multiple'>  {itemCounts[props.id] || 0}  x</span>   {caloriesPerServing * itemCounts[props.id] } RS</h6>
                                    <span>
                                    {itemCounts && (
                                        <button onClick={handleMinus} className="minusbtn"  style={{ backgroundColor: 'red', color: 'white' }}>
                                            <FaMinus style={{ width : "20px", height : "20px" }}/>
                                        </button>
                                    )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default CartDetails;