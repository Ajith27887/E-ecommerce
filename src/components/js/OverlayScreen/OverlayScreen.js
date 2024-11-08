import { CiCirclePlus } from "react-icons/ci";
import { IconContext } from "react-icons";
import Detailpage from '../Detailpage/Detailpage'

import './OverlayScreen.scss'
import { useState } from "react";



const OverlayScreen = (props = {}) => {
    const {tags = '', name = '', rating = ''} = props,
        [detail, setDetail] = useState(false),
        handleHover = () => {
            setDetail(true);
        };
    
    return(
        <IconContext.Provider
        value={{ color: 'white', size: '75px', font: "bold" }}
      >
            <div className="overlay-screen">
                <div className='badges-container'>
                    <div>
                        {tags.map(data => (
                            <div className='badges'>{data}</div>
                        ))}
                    </div>
                    <div className='plus'>
                        <CiCirclePlus onClick={handleHover} style={{fontWeight: 'bolder'}}/>
                    </div>
                </div>
            {detail && <Detailpage/>}
            </div>
        </IconContext.Provider>
    )
}

export default OverlayScreen;