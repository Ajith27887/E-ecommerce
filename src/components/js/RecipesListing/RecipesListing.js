import { useState } from 'react'
import OverlayScreen from '../OverlayScreen/OverlayScreen'

import '../RecipesListing/RecipesListing.scss'

const RecipesListing = (props = {}) => {
    const {recipes = [], limit = '', total = '' } = props,
        [hover, setHover] = useState(false),
        handlehover = () => {
            setHover(true);
            console.log('hi');
            
        }
    console.log(hover,'hover');
    
    return(
        <div className="recipes-listing">
            <div className="container-fluid">
                <div className="row">
                    {/* <div className="col-3">
                        <p>test</p>
                    </div> */}
                    <div className="col-12">
                        <div className="recipes-container">
                            <div className="row">
                                {recipes.map(data => (
                                    <div className="col-4">
                                        <div className='racipes-image'>
                                            <div className='overlay-container'>
                                                <img src={data.image} onMouseEnter={handlehover} className="mt-2 recipes" style={{width : '100%'}}/>
                                                {hover && <OverlayScreen/>}
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

export default RecipesListing