/* eslint-disable max-len */
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

function Book(props) {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const removeBookFromList = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <div className="container-fluid px-5 mb-4">
        <div className="row  bg-white mt-3 book px-3 py-2">
          <div className="col-5 p-3">
            <h4 className="fw-bold title">{title}</h4>
            <p className="mb-0 author">{author}</p>
            <button className="btn p-0 my-btn" type="button">
              comments
            </button>
            <button
              type="button"
              className="btn my-btn"
              onClick={removeBookFromList}
            >
              Remove
            </button>
            <button className="btn my-btn" type="button">
              edit
            </button>
          </div>
          <div className="col-7">
            <div className="row">
              <div className="col-4">
                <div className="circle-wrap">
                  <div className="circle">
                    <div className="mask full">
                      <div className="fill" />
                    </div>
                    <div className="mask half">
                      <div className="fill" />
                    </div>
                    <div className="inside-circle" />
                  </div>
                </div>
              </div>
              <div className="col-2 d-flex align-items-center">
                <div className="my-text">
                  <h1 className="display-5">75%</h1>
                  <p>Completed</p>
                </div>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-center">
                <div className="progress-details">
                  <p className="chapter">Current chapter</p>
                  <p className="number pb-3">Chapter 17</p>
                  <button type="button" className="btn btn-primary">
                    UPDATE PROGRESS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
