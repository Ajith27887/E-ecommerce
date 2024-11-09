const CartDetails = (props = {}) =>{
        const {name = '',image = '', rating = '', reviewCount = '', prepTimeMinutes = '' , mealType = [], ingredients = '', cuisine = '', caloriesPerServing = ''} = props;

        return (
            <div className="mt-5">
                <div >
                    {name}
                </div>
            </div>
        )
}

export default CartDetails;