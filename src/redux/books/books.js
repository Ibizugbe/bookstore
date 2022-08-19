import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from './src/api/api';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const FETCH_BOOKS = 'bookstore/books/fetchBooks';

const initialState = { books: [] };
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return { ...state, books: action.payload };
    case `${ADD_BOOK}/fulfilled`:
      return { ...state, books: [...state.books, action.payload] };
    case `${REMOVE_BOOK}/fulfilled`:
      return { ...state, books: state.books.filter((book) => book.item_id !== action.payload) };
    default:
      return state;
  }
}

const transformData = (myObj) => Object.keys(myObj).map((obj) => ({
  item_id: obj,
  title: myObj[obj][0].title,
  author: myObj[obj][0].author,
  category: myObj[obj][0].category,
}));

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const response = await fetch(`${apiUrl}/books`);
  const data = await response.json();

  const toSend = transformData(data);

  return toSend;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (bookInfo) => {
  await axios.post(`${apiUrl}/books`, bookInfo);

  return bookInfo;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${apiUrl}/books/${id}`, { item_id: id });

  return id;
});
