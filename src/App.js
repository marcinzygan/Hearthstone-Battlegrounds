import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingData, notLoadingData } from "./App/Features/Loader/loaderSlice";
import { setData } from "./App/Features/Cards/cardsSlice";
import { nextPage, prevPage } from "./App/Features/Pagination/paginateSlice";
import Loading from "./App/Features/Loader/Loading.js";
import Card from "./App/Features/Cards/Card";

function App() {
  //STATE
  const cards = useSelector((state) => state.cards.cards);
  const loading = useSelector((state) => state.loader.loading);
  const pageNumber = useSelector((state) => state.page.pageNumber);
  const dispatch = useDispatch();

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
        window.scrollTo(0, 0);
      })

      .catch(function (error) {
        console.error(error);
        dispatch(notLoadingData());
      });
  }, [dispatch]);
  // PAGINATION LOGIC
  const cardsPerPage = 10;
  const cardsSeen = pageNumber * cardsPerPage;
  const numberOfPages = Math.ceil(cards.length / cardsPerPage);
  //Display cards function
  const displayCards = cards
    .slice(cardsSeen - 10, cardsPerPage - 10 + cardsSeen)
    .map((card) => {
      return (
        <div>
          <Card {...card} />
        </div>
      );
    });
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="card-container">{displayCards}</div>
      <button onClick={() => dispatch(prevPage())}>Prev</button>
      {pageNumber} of {numberOfPages}
      <button onClick={() => dispatch(nextPage(numberOfPages))}>next</button>
    </>
  );
}

export default App;
