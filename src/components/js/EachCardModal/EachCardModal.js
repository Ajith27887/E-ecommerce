import { Container, Row, Col } from 'react-bootstrap';
import { CiStar } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import CartButtons from '../CartButtons/CartButtons'


const EachCardMODAL = (props = {}) => {
    let element = [];
    const {name = '',image = '', rating = '', reviewCount = '', prepTimeMinutes = '' , mealType = [], ingredients = '', cuisine = '', caloriesPerServing = ''} = props,
    ratingLenght = Math.floor(rating);
    const countingNum = () =>{
        for (let i = 0; i < ratingLenght; i++) {
            element.push(i + 1)
        }
    }
    countingNum();


    return(
        <Row>
        <Col lg='6'>
            <img src={image} className='posterimg' style={{width : "100%"}}/>
        </Col>
        <Col lg='6'>
            <Container fluid>
                <Row>
                    <Col lg= '12'>
                        <div className='meal-type mb-2'>{mealType[0]}</div>
                    </Col>
                    <div className='PrizeDetails'>
                    <Col>
                        {element && <div className='rating'>
                            <span className='rating-text mt-2'>Rating :</span>
                            {
                                element.map((_, index) => (
                                    <div>
                                        <CiStar  key={index} style={{width : "20px", height : '100%', color: 'black'}}/>
                                    </div>
                                ))
                            }
                            <div>  ({reviewCount})</div>
                        </div>}
                        <div className='mt-2'>Price : {caloriesPerServing} {<FaRupeeSign style={{width : '10px', height : '20px'}}/>}</div>
                        <div className='mt-2'> PrepTimeMinutes : {prepTimeMinutes}</div>
                    </Col>
                    </div>
                    <CartButtons {...props}/>
                    
                </Row>
            </Container>
        </Col>
    </Row>
    )
}

export default EachCardMODAL