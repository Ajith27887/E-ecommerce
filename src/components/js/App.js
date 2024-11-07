import './App.css';
import {useEffect, useState} from 'react';
import RecipesListing from './RecipesListing/RecipesListing';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="App">
		<RecipesListing {...data} />
    </div>
  );
}

export default App;
