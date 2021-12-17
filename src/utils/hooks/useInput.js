import { useState } from 'react';

const useInput = (initialState = '') => {
  const [value, setValue] = useState(initialState);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(initialState);
  };

  return [value, handleChange, reset];
};

export default useInput;
