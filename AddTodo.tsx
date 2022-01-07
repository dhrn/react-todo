import React, { useRef } from 'react';

export default function ({ onAdd }) {
  const todo = useRef(null);

  const onKeyPress = (event) => {
    if (event.key == 'Enter' && todo.current.value.length > 2) {
      onAdd(todo.current.value);
      todo.current.value = '';
    }
  };

  return (
    <input ref={todo} placeholder="Add Todo here" onKeyPress={onKeyPress} />
  );
}
