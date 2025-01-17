import { useState, useEffect } from "react";
import "../Welcome/Welcome.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../Firebase/firebase"; // Correctly import firebaseConfig

const Welcome = () => {
  const auth = getAuth(app); // Initialize auth with the app instance
  const [data, setData] = useState([]),
    navigate = useNavigate(),
    [user] = useAuthState(auth);

  const provider = new GoogleAuthProvider();

  const signin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/Home");
    }
  }, [user, navigate]);

  console.log("data", data);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("https://dummyjson.com/recipes");
        setData(result.data.recipes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const sliced = data.slice(0, 4);

  return (
    <>
      <div className="welcome-container">
        {data &&
          sliced.map((data, ixd) => (
            <img
              className={`img-${ixd}`}
              style={{ width: "25%" }}
              src={data.image}
            />
          ))}
        <button class="button-87" onClick={signin} role="button">
          Start
        </button>
      </div>
    </>
  );
};

export default Welcome;
