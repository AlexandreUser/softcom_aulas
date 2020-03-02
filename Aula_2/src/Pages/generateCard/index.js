import React, { useState } from 'react';
import styles from './styles.css';
import Card from '../card/';
export default props => {
  const [number, setNumber] = useState(0);
  const [cards, setCards] = useState([]);
  return (
    <button
      onClick={() => {
        setNumber(number + 1);
        setCards([
          ...cards,
          <Card
            title="cartão n©"
            description="Este cartão foi gerado com hooks"
            hooks={number}
          />,
        ]);
        props.passCards(cards);
      }}
      className="button"
    >
      Generate
    </button>
  );
};
