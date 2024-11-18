import { useState } from 'react'
import OverlayScreen from '../OverlayScreen/OverlayScreen'
import '../RecipesListing/RecipesListing.scss'

const RecipesListing = (props = {}) => {
    const {recipes = [], limit = '', total = '' } = props,
        [hover, setHover] = useState(0),
        handlehover = (id) => {
            setHover(id);
        }
    
    return(
        <div className="recipes-listing">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="recipes-container">
                            <div className="row">
                                {recipes.map(data => (
                                    <div key={data.id} className="mt-4 my-5 col-6 col-md-4 col-lg-3">
                                        <div className='racipes-image'>
                                            <div className='overlay-container'>
                                                <img src='https://via.placeholder.com/300x400' style={{width : "100%"}}/>
                                                <img src={data.image} onMouseEnter={() => handlehover(data.id)} className="recipes" style={{width : '100%'}}/>
                                                {hover === data.id && <OverlayScreen {...data}/>}
                                            </div>
                                        </div>
                                    </div>    
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipesListing;