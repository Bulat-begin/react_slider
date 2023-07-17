import "./styles.css";

import React from 'react';
import Slider from './Slider';

const items = [
  { text: 'First item' },
  { text: 'Second item' },
  { text: 'Third item' },
];

const App = () => {
  return (
    <div>
      <Slider items={items} />
    </div>
  );
};

export default App;

