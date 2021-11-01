// import React from "react";
import { useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import { Label, Input } from "./Filter.styled.jsx";
import { filterContact } from '../../redux/phonebook/phonebook-actions';



const Filter = () => {
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();

  const handleInputValue = e => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
    dispatch(filterContact(filterValue));
  }, [dispatch, filterValue]);


  return (
  <Label>
    Find contacts by name
    <Input 
      type="text"
      onChange={handleInputValue} />
  </Label>
  );
};

export default Filter;


