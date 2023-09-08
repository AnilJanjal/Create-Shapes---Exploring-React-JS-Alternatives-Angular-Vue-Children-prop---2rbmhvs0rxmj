import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [selectedShape, setSelectedShape] = useState('square');
  const [shapes, setShapes] = useState([]);

  const handleShapeChange = (e) => {
    setSelectedShape(e.target.value);
  };

  const addShape = () => {
    const newShape = <div key={shapes.length} className={selectedShape}>{selectedShape}</div>;
    setShapes([...shapes, newShape]);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={addShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes}
      </div>
    </div>
  );
};

export default App;
