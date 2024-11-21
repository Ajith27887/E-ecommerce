import './App.css';
import {useEffect, useState, lazy, Suspense} from 'react';
// import RecipesListing from './components/js/RecipesListing/RecipesListing';
import Welcome from "./components/js/Welcome/Welcome"
import axios from "axios"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/js/Cart/Cart';
import Lazy from './components/js/Lazy/Lazy';

const RecipesListing = lazy(() => delayForDemo(import('./components/js/RecipesListing/RecipesListing')));


// Add a fixed delay so you can see the loading state
async function delayForDemo(promise) {
	await new Promise(resolve => {
		setTimeout(resolve, 2000);
	});
	return promise;
}

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
				<Route path="/" element={<Welcome />} />
				<Route path="/Home" element={<Suspense fallback={<Lazy />}>
					<RecipesListing {...data} />
				</Suspense>} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	</Router>

  );
}

export default App;
