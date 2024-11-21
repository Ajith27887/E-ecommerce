import Spinner from 'react-bootstrap/Spinner';
import "../Lazy/Lazy.scss"

export default function Lazy() {
    return (
        <>
        <Spinner className='spinner' animation="border" role="status">
        </Spinner>
        <span className='mx-3' style={{fontSize : "25px"}}>Loading...</span>
        </>

        // className="visually-hidden"
    );
}