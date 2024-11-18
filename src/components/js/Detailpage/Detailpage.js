import { useEffect, useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalContext } from '../Provider/ModalProvider';
import { Container, Row, Col } from 'react-bootstrap';
import { CiStar } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import CartButtons from '../CartButtons/CartButtons'
import EachCardModal from '../EachCardModal/EachCardModal';
import { MdFastfood } from "react-icons/md";
import OverlayScreen from '../OverlayScreen/OverlayScreen';
import axios from 'axios';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Detailpage.scss'

function Detailpage(props = {}) {
	const {name = '',image = '', rating = '', reviewCount = '', prepTimeMinutes = '' , mealType = [], ingredients = '', cuisine = '', caloriesPerServing = ''} = props,
    	{show, setShow} = useContext(ModalContext),
		[coolDrinks, setCoolDrinks] = useState([]),
		[hoveredDrink, setHoveredDrink] = useState(null);


		useEffect(() =>{
			( async()=> {
				try{
				const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
				setCoolDrinks(response.data.drinks);

			}catch(error){
				console.log(error);
				
			}})()
		},[])

		const chunkArray = (array, size) => {
			const chunkedArr = [];
			for (let i = 0; i < array.length; i += size) {
				chunkedArr.push(array.slice(i, i + size));
			}
			return chunkedArr;
		};
	
		const chunkedCoolDrinks = chunkArray(coolDrinks, 6);
		

  return (
    <>        
		<Modal
			show={show}
			onHide={() => setShow(false)}
			dialogClassName="modal-90w"
			aria-labelledby="example-custom-modal-styling-title"
		>
			<Modal.Header closeButton>
			<Modal.Title className='w-100 text-center modal-title-custom' centered id="example-custom-modal-styling-title">
				{name}
				<span className='mx-1'>
					<MdFastfood style={{width : '30px'}}/>
				</span>
			</Modal.Title>
			</Modal.Header>
			<Modal.Body>
					<Container fluid>
						<EachCardModal {...props}/>
						<Row>
							<Col>
								<div className="cool-drinks mt-5">
								<Carousel>
                                    {chunkedCoolDrinks.map((chunk, index) => (
                                        <div key={index} className='overlay-container'>
                                            <Row>
                                                {chunk.map((data, idx) => (
                                                    <Col key={idx} xs={2}>
														<div className="drink-container" >
																<img src={data.strDrinkThumb} onMouseEnter={() => setHoveredDrink(data.id)}
																	onMouseLeave={() => setHoveredDrink(null)} style={{ width: '100%' }} key={idx}  alt={data.strDrink} />
																{hoveredDrink === data.id && <OverlayScreen {...data} />}
																</div>
                                                    
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    ))}
                                </Carousel>
								</div>
							</Col>
						</Row>
					</Container>
			</Modal.Body>
		</Modal>
    </>
  );
}

export default Detailpage;

