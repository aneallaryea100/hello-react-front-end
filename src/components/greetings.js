/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetings';

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greetings);
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  return (
    <div>
      <h1>Refresh and see</h1>
      <h2>Greeting messages below:</h2>
      <h3>{greeting.message}</h3>
    </div>
  );
};

export default Greetings;
