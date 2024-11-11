import './CartDetails.scss'
import { useNavigate } from "react-router-dom"; 




const CartDetails = (props = {}) =>{
        const {name = '',image = '', rating = '', reviewCount = '', prepTimeMinutes = '' , mealType = [], ingredients = '', cuisine = '', caloriesPerServing = ''} = props,
            Tax = caloriesPerServing * (5 / 100);

        return (
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
                                    <p>Total : </p>
                                </div>
                                <div>
                                    <h6> {caloriesPerServing} RS</h6>
                                    <p> {Tax} </p>
                                    <hr/>
                                    <p>{caloriesPerServing + Tax}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default CartDetails;