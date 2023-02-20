import React from 'react';
import '../../index.css'
import Card from './card';
import cardData from '../../constants/cardsData';

export default function Content(): JSX.Element {
  return (
    <div className="grid md:grid-cols-3 content card-container">
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          date={card.date}
          readingTime={card.readingTime}
          tags={card.tags}
        />
      ))}
    </div>
  );
};