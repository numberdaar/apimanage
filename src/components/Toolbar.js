import React from 'react';

const Toolbar = () => {
  return (
    <div className="mb-4 flex space-x-2">
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Undo</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Redo</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Filter</button>
    </div>
  );
};

export default Toolbar;
