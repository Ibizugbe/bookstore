import React from 'react';

function Book(props) {
  return (
    <div className="book">
      {props.title}
      {' '}
      by
      {props.author}
    </div>
  );
}

export default Book;
