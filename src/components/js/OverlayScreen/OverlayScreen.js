import { useState, useContext } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IconContext } from "react-icons";
import Detailpage from '../Detailpage/Detailpage'

import './OverlayScreen.scss'
import Button from 'react-bootstrap/Button';
import { ModalContext } from "../Provider/ModalProvider";

const OverlayScreen = (props = {}) => {
    const {tags = '', name = '', rating = ''} = props,
        [detail, setDetail] = useState(false),
        {show, setShow} = useContext(ModalContext),
        handleHover = () => {
            setDetail(true);
        };
    
    return(
        <IconContext.Provider
        value={{ color: 'white', size: '75px', font: "bold" }}
      >
            <div className="overlay-screen">
                <div className='badges-container'>
                    <div className="badges">
                        {tags[0]}
                    </div>
                    <div className='plus'>
                        <Button onClick={() => setShow(true)}>
                            <CiCirclePlus onClick={handleHover}  style={{fontWeight: 'bolder'}}/>
                        </Button>
                    </div>
                </div>
            {detail && <Detailpage {...props} show={show} setShow={setShow}/>}
            </div>
        </IconContext.Provider>
    )
}

export default OverlayScreen;