


const RecipesListing = (props = {}) => {
    const {recipes = [], limit = '', total = '' } = props
    // console.log('RecipesListing', recipes[0].image, limit, total);

    return(
        <div className="recipes-listing">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <p>test</p>
                    </div>
                    {recipes.map(data => (
                            <div className="col-4" key={data.id}>
                                <img src={data.image} className="mt-2" style={{width : '100%'}}/>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default RecipesListing