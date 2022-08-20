/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

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
          <div className="col-6 p-3">
            <h4 className="fw-bold title">{title}</h4>
            <p className="mb-0 author">{author}</p>
            <button type="button" className="btn btn-primary btn-sm" onClick={removeBookFromList}>
              Remove
            </button>
          </div>
          <div className="col-6">
            
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
