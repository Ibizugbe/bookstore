import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCategories } from '../redux/categories/categories';

function Catigory() {
  const message = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkStatus = () => {
    dispatch(checkCategories());
  };
  return (
    <>
      <button type="button" onClick={checkStatus}>Check Status</button>
      <h6>{message}</h6>
    </>
  );
}

export default Catigory;
