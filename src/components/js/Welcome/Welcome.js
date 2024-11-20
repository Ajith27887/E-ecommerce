import { useState, useEffect } from "react";
import "../Welcome/Welcome.scss"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Welcome = () => {

    const [data, setData] = useState([]),
        navigate = useNavigate(),
        handelWelcome = () => {
            navigate('/Home')
        }

	console.log("data", data);
	
	useEffect(() => {
		(async () => {
			try{
				const result = await axios.get('https://dummyjson.com/recipes')
				setData(result.data.recipes);

			}catch(error){
				console.error(error);
			}
		})()
	},[]);
    
    const sliced = data.slice(0,4);
    


    return(
        <>
            <div className="welcome-container">
                {data && sliced.map((data,ixd) => (
                    <img className={`img-${ixd}`} style={{width : "25%"}} src={data.image}/>
                ))}
                <button class="button-87" onClick={handelWelcome} role="button">Start</button>
            </div>
        </>
    )
}

export default Welcome