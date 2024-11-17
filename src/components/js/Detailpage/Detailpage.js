import { useEffect, useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalContext } from '../Provider/ModalProvider';
import { Container, Row, Col } from 'react-bootstrap';
import { CiStar } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import CartButtons from '../CartButtons/CartButtons'
import { MdFastfood } from "react-icons/md";
import axios from 'axios';

import './Detailpage.scss'

function Detailpage(props = {}) {

	let element = [];
	const {name = '',image = '', rating = '', reviewCount = '', prepTimeMinutes = '' , mealType = [], ingredients = '', cuisine = '', caloriesPerServing = ''} = props,
    	{show, setShow} = useContext(ModalContext),
		ratingLenght = Math.floor(rating),
		[coolDrinks, setCoolDrinks] = useState([]);
		const countingNum = () =>{
			for (let i = 0; i < ratingLenght; i++) {
				element.push(i + 1)
			}
		}
		countingNum();

		useEffect(() =>{
			( async()=> {
				try{
				const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
				setCoolDrinks(response.data.drinks);

			}catch(error){
				console.log(error);
				
			}})()
		},[])
		

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
					<Row>
						<Col>
							<div className="cool-drinks mt-5">
								{coolDrinks.map(data => (
									<img src={data.strDrinkThumb}  style={{width : '100px'}}/>
								))}
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