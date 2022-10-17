import React from "react";
import { nextPage, prevPage } from "./paginateSlice";
import { useSelector, useDispatch } from "react-redux";
const Pagination = (props) => {
  const pageNumber = useSelector((state) => state.page.pageNumber);
  const dispatch = useDispatch();
  console.log(props.numberOfPages);

  return (
    <>
      <div className="pagination">
        <button className="btn" onClick={() => dispatch(prevPage())}>
          Prev
        </button>
        <div className="page__numbers">
          {pageNumber} of {props.numberOfPages}
        </div>
        <button
          className="btn"
          onClick={() => dispatch(nextPage(props.numberOfPages))}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;
