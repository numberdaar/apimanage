import React from 'react';
import useStore from '../store';

const Cell = ({ id }) => {
  const { cells, editCell } = useStore();
  const value = cells[id] || '';

  const handleChange = (e) => {
    editCell(id, e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="p-2 border text-center"
    />
  );
};

export default Cell;
