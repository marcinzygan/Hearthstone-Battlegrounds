import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingData, notLoadingData } from "./App/Features/Loader/loaderSlice";
import { setData } from "./App/Features/Cards/cardsSlice";
import { nextPage, prevPage } from "./App/Features/Pagination/paginateSlice";
import Loading from "./App/Features/Loader/Loading.js";

function App() {
  //STATE
  const cards = useSelector((state) => state.cards.cards);
  const loading = useSelector((state) => state.loader.loading);
  const pageNumber = useSelector((state) => state.page.pageNumber);
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

        dispatch(setData(data));
        console.log(data);
        dispatch(notLoadingData());
      })

      .catch(function (error) {
        console.error(error);
        dispatch(notLoadingData());
      });
  }, [dispatch]);
  // Pagination Logic
  const cardsPerPage = 10;
  const cardsSeen = pageNumber * cardsPerPage;
  const numberOfPages = Math.floor(cards.length / cardsPerPage);
  const displayCards = cards
    .slice(cardsSeen, cardsPerPage + cardsSeen)
    .map((card) => {
      return <h1>{card.name}</h1>;
    });
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="App">
      {displayCards}
      <button onClick={() => dispatch(prevPage())}>Prev</button>
      {pageNumber} of {numberOfPages}
      <button onClick={() => dispatch(nextPage(numberOfPages))}>next</button>
    </div>
  );
}

export default App;
