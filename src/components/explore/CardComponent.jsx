import React from 'react'

const CardComponent = ({category, date, location, title, description}) => {
  return (
    <div className='card-container'>
    <h3>{category}</h3>
        <div className='card'>
        <div className='card-date-location'>
            <div className = 'date'>
            <span role="img" aria-label="calendar">📅</span>
            {date}
            </div>
            <div className='location'>
            <span role="img" aria-label="location">📍</span>
            {location}
          </div>
        </div>
        <div className='card-title-description'>
        <h4 className="card-title">{title} ➡</h4>
        <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
