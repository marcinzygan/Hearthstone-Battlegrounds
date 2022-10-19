import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadingData,
  notLoadingData,
  appStarted,
} from "./App/Features/Loader/loaderSlice";
import {
  setPage,
  showPagination,
} from "./App/Features/Pagination/paginateSlice";
import { setData } from "./App/Features/Cards/cardsSlice";
import Loading from "./App/Features/Loader/Loading.js";
import Card from "./App/Features/Cards/Card";
import Pagination from "./App/Features/Pagination/Pagination";
import Header from "./App/Features/Header/Header";
import Footer from "./App/Features/Footer/Footer";
import Welcome from "./App/Features/WelcomeScreen/Welcome";
import Modal from "./App/Features/Modal/Modal";

function App() {
  //STATE
  const cards = useSelector((state) => state.cards.cards);
  const loading = useSelector((state) => state.loader.loading);
  const appStarting = useSelector((state) => state.loader.appStarted);
  const pageNumber = useSelector((state) => state.page.pageNumber);
  const showPaginationButtons = useSelector(
    (state) => state.page.showPagination
  );
  const dispatch = useDispatch();

  const callAPI = function () {
    dispatch(loadingData());

    console.log("API CALLED");
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
        dispatch(showPagination());
        dispatch(setPage(1));
        dispatch(appStarted());
        console.log(data);
        dispatch(notLoadingData());
      })

      .catch(function (error) {
        console.error(error);
        dispatch(notLoadingData());
      });
  };
  // API CALL FOR BACKEND
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "http://localhost:8000/cards",
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       dispatch(loadingData());
  //       const data = response.data;

  //       dispatch(setData(data));
  //       console.log(data);
  //       dispatch(notLoadingData());
  //     })

  //     .catch(function (error) {
  //       console.error(error);
  //       dispatch(notLoadingData());
  //     });
  // }, [dispatch]);
  // PAGINATION LOGIC
  const cardsPerPage = 2;
  const cardsSeen = pageNumber * cardsPerPage;
  const numberOfPages = Math.ceil(cards.length / cardsPerPage);

  //Display cards function
  const displayCards = cards.slice(cardsSeen - 2, cardsPerPage - 2 + cardsSeen);
  // .map((card) => {
  //   return (
  //     <div>
  //       <Card {...card} />
  //     </div>
  //   );
  // });
  console.log(displayCards);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      {!loading && <Header callAPI={callAPI} />}
      {!appStarting && !loading && <Welcome callAPI={callAPI} />}
      {loading && <Loading />}
      {!loading && appStarting && (
        <div className="card-container">
          {displayCards.map((card) => (
            <Card key={card.cardId} {...card} />
          ))}
          <Modal />
        </div>
      )}
      {showPaginationButtons && <Pagination numberOfPages={numberOfPages} />}
      {!loading && <Footer />}
    </>
  );
}

export default App;
