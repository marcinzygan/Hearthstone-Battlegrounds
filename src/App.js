import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingData, notLoadingData } from "./App/Features/loadingSlice";
import Loading from "./Components/Loading.js";

function App() {
  //STATE
  const [cards, setCards] = useState([]);
  const loading = useSelector((state) => state.loader.loading);
  const dispatch = useDispatch();
  console.log(loading);

  // API CALL FOR BACKEND
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/cards",
    };

    axios
      .request(options)
      .then(function (response) {
        dispatch(loadingData());
        const data = response.data;

        setCards(data);
        console.log(data);
        dispatch(notLoadingData());
      })

      .catch(function (error) {
        console.error(error);
        dispatch(notLoadingData());
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="App">
      {cards.map((card) => {
        return <h1>{card.name}</h1>;
      })}
    </div>
  );
}

export default App;
