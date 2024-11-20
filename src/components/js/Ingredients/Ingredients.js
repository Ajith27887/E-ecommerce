const Ingredients = (props = {}) => {
    return(
        <>
            <div>
                <h3>Ingredients</h3>
                <ul>

                {props && props.ingredients.map(data => (
                    <li>{data}</li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default Ingredients