// import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from "./Filter.styled.jsx";
import { getFilter } from '../../redux/phonebook/phonebook-selectors.js';
import { changeFilter } from '../../redux/phonebook/phonebook-reducer.js';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
  <Label>
    Find contacts by name
    <Input 
      type="text"
      value={filterValue}
      onChange={(e) => dispatch(changeFilter(e.target.value))} />
  </Label>
  );
};

export default Filter;


