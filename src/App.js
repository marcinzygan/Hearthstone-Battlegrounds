import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";

function App() {
  //STATE
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  // API CALL FOR BACKEND
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/cards",
    };

    axios
      .request(options)
      .then(function (response) {
        setLoading(true);
        const data = response.data;

        setCards(data);
        console.log(data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
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
