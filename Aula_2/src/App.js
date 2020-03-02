import React, { useState } from 'react';
import Card from './Pages/card/';
import GenerateCard from './Pages/generateCard/';

function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className="App">
      {cards.map(card => {
        return card;
      })}
      <GenerateCard passCards={setCards} />
    </div>
  );
}

export default App;
