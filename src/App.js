import React from 'react';
import Cell from './components/Cell';
import ControlPanel from './components/ControlPanel';

const App = () => {
  const rows = 10;
  const columns = 10;
  
  const cellIds = Array.from({ length: rows * columns }, (_, i) => i);

  return (
    <div className="p-4">
      <ControlPanel />
      <div className="grid grid-cols-10 gap-2 mt-4">
        {cellIds.map((id) => (
          <Cell key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default App;
