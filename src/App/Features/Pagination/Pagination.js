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
          <Icon icon="el:arrow-left" className="iconify" />
        </button>
        <div className="page__numbers">
          <p>
            <span className="page__span">{pageNumber} </span>
            of
            <span className="page__span"> {props.numberOfPages}</span>
          </p>
        </div>
        <button
          className="btn"
          onClick={() => dispatch(nextPage(props.numberOfPages))}
        >
          <Icon icon="el:arrow-right" className="iconify" />
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
