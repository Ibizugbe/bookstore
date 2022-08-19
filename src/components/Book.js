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
    <div className="book">
      <p>
        <span>{title}</span>
        {' '}
        by
        <span>{author}</span>
        <button type="button" onClick={removeBookFromList}>
          Remove
        </button>
      </p>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
