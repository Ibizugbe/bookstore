import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    title: '',
    author: '',
    category: '',
  });

  const changeState = (e) => {
    e.preventDefault();
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const bookState = (e) => {
    e.preventDefault();
    if (!formValue.title.trim() || !formValue.author.trim()) return;
    const book = {
      item_id: uuidv4(),
      title: formValue.title,
      author: formValue.author,
      category: formValue.category,
    };
    dispatch(addBook(book));
    setFormValue({ title: '', author: '', category: '' });
  };

  return (
    <form onSubmit={bookState} className="ps-5 pe-5 pb-5 mb-5">
      <hr />
      <h2 className="form-header">Add New Book</h2>
      <input
        className="inputs"
        type="text"
        onChange={changeState}
        value={formValue.author}
        placeholder="Author"
        name="author"
      />
      <input
        className="inputs"
        type="text"
        onChange={changeState}
        value={formValue.title}
        placeholder="title"
        name="title"
      />
      <input
        className="inputs"
        type="text"
        name="category"
        value={formValue.category}
        onChange={changeState}
        placeholder="category"
      />
      <input type="submit" value="Add Book" className="btn btn-primary" />
    </form>
  );
}

export default Form;
