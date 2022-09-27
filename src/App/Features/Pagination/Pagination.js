import React from "react";
import { nextPage, prevPage } from "./paginateSlice";
import { useSelector, useDispatch } from "react-redux";
const Pagination = (props) => {
  const pageNumber = useSelector((state) => state.page.pageNumber);
  const dispatch = useDispatch();
  console.log(props.numberOfPages);

  return (
    <>
      <button onClick={() => dispatch(prevPage())}>Prev</button>
      <div>
        {pageNumber} of {props.numberOfPages}
      </div>
      <button onClick={() => dispatch(nextPage(props.numberOfPages))}>
        next
      </button>
    </>
  );
};

export default Pagination;
