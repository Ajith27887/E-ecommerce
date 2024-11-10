import './CartDetails.scss'

const CartDetails = (props = {}) =>{
        const {name = '',image = '', rating = '', reviewCount = '', prepTimeMinutes = '' , mealType = [], ingredients = '', cuisine = '', caloriesPerServing = ''} = props;

        return (
            <div className="mt-5">
                <div className="container CartList">
                    <div className="row">
                        <div className="col-3 px-0">
                            <img style={{width : '100%'}} src={image}/>
                        </div>
                        <div className="col-9 p-3 bold">
                            <h4 >{name}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default CartDetails;