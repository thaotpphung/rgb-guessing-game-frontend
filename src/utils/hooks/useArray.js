import { useState } from 'react';

export default function useArray(initialState) {
  const [array, setArray] = useState(initialState);

  const push = (element) => {
    setArray((a) => [...a, element]);
  };

  const filter = (callback) => {
    setArray((a) => a.filter(callback));
  };

  const update = (index, newElement) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  };

  const addAt = (index, newElement) => {
    const newArray = [...array];
    newArray.splice(index + 1, 0, newElement);
    setArray(newArray);
  };

  const remove = (index) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };

  const clear = () => {
    setArray([]);
  };

  const reset = () => {
    setArray(initialState);
  };

  return {
    array,
    setArray,
    push,
    filter,
    update,
    remove,
    clear,
    addAt,
    reset,
  };
}
