import './App.css';
import {useEffect, useState} from 'react';
import RecipesListing from './components/js/RecipesListing/RecipesListing';
import Welcome from "./components/js/Welcome/Welcome"
import axios from "axios"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/js/Cart/Cart';


function App() {

	const [data, setData] = useState([]);

	console.log("data", data);
	
	useEffect(() => {
		(async () => {
			try{
				const result = await axios.get('https://dummyjson.com/recipes')
				setData(result.data);

			}catch(error){
				console.error(error);
			}
		})()
	},[]);	

  return (
	<Router>
		<div className="App">
			<Routes>
				<Route path='/' element={<Welcome/>} />
				<Route path='/Home' element={<RecipesListing {...data}/>}/>
				<Route path="/cart" element={<Cart/>} />
			</Routes>
		</div>
	</Router>

  );
}

export default App;
