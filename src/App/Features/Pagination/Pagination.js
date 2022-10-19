import React from "react";
import { Icon } from "@iconify/react";
import { nextPage, prevPage } from "./paginateSlice";
import { useSelector, useDispatch } from "react-redux";

const Pagination = (props) => {
  const pageNumber = useSelector((state) => state.page.pageNumber);
  const dispatch = useDispatch();
  console.log(props.numberOfPages);

  return (
    <>
      <div className="pagination">
        <button className="btn">First Page</button>
        <button className="btn" onClick={() => dispatch(prevPage())}>
          Prev
        </button>
        <div className="page__numbers">
          <p>
            {pageNumber} of {props.numberOfPages}
          </p>
        </div>
        <button
          className="btn"
          onClick={() => dispatch(nextPage(props.numberOfPages))}
        >
          Next
        </button>
        <button className="btn">Last</button>
      </div>
    </>
  );
};

export default Pagination;
