import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBOOK } from '../redux/books/books';

function Form() {
  return (
    <form action="#">
      <input type="text" placeholder="Author" />
      <input type="text" placeholder="Title" />
      <input type="submit" value="Add Book" />
    </form>
  );
}

export default Form;
