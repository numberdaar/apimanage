import React from 'react';
import useStore from '../store';

const ControlPanel = () => {
  const { undo, redo } = useStore();

  return (
    <div className="flex space-x-4">
      <button onClick={undo} className="px-4 py-2 bg-blue-500 text-white rounded">Undo</button>
      <button onClick={redo} className="px-4 py-2 bg-green-500 text-white rounded">Redo</button>
    </div>
  );
};

export default ControlPanel;
