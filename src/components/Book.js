/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <div className="book">
      <p>
        <span>{title}</span>
        {' '}
        by
        {' '}
        <span>{author}</span>
      </p>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
