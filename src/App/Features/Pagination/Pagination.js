import React from "react";
import { Icon } from "@iconify/react";
import { nextPage, prevPage, firstPage, lastPage } from "./paginateSlice";
import { useSelector, useDispatch } from "react-redux";

const Pagination = (props) => {
  const pageNumber = useSelector((state) => state.page.pageNumber);
  const dispatch = useDispatch();
  // console.log(props.numberOfPages);

  return (
    <>
      <div className="pagination">
        <button className="btn">
          <Icon icon="uiw:d-arrow-left" onClick={() => dispatch(firstPage())} />
        </button>
        <button className="btn" onClick={() => dispatch(prevPage())}>
          <Icon icon="bx:left-arrow-circle" className="iconify" />
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
          <Icon icon="bx:right-arrow-circle" className="iconify" />
        </button>
        <button className="btn">
          <Icon
            icon="uiw:d-arrow-right"
            onClick={() => dispatch(lastPage(props.numberOfPages))}
          />
        </button>
      </div>
    </>
  );
};

export default Pagination;
