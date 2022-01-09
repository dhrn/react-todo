import React from 'react';
import { TodoInterface } from './models';

interface TodoProps extends TodoInterface {
  toggle: Function;
  remove: Function;
}

export default ({ title, status, toggle, remove }: TodoProps) => {
  const onToggle = () => {
    toggle({ title, status });
  };

  const onDelete = () => {
    remove({ title, status });
  };

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        flexWrap: 'nowrap',
      }}
    >
      <li
        style={{
          textDecoration: status === 'Completed' ? 'line-through' : 'none',
        }}
        onClick={onToggle}
      >
        {title}
      </li>

      <button onClick={onDelete}> delete </button>
    </section>
  );
};
