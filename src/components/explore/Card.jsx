// App.js
import React from 'react';
import CardComponent from './CardComponent';

function Card() {
  // Array of card data
  const cardData = [
    {
      category: 'Interior Design',
      date: 'January 22, 2022',
      location: 'Florida, USA',
      title: 'The Waterfront Cafe and Restaurant',
      description: 'Designer HTML5 Template is 100% free to download provided by TemplateMo website.'
    },
    {
      category: 'Building & Developing',
      date: 'January 20, 2022',
      location: 'Miami Beach, Florida, USA',
      title: 'Home Land Port Canaveral Suites',
      description: 'This is based on latest Bootstrap v5.1.3 CSS layout where you can easily edit and use Bootstrap components.'
    },
    {
      category: 'Giving Your Brand Power',
      date: 'January 18, 2022',
      location: 'North City Beach Park',
      title: 'Hallandale Beach Motel Design',
      description: 'Feel free to download & use this template for your websites. Please tell your friends about TemplateMo.'
    }
  ];

  return (
    <div className="Card">
      {cardData.map((card, index) => (
        <CardComponent
          key={index}  // Add key prop to ensure each card has a unique identifier
          category={card.category}
          date={card.date}
          location={card.location}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default Card;
