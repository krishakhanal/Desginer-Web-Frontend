import React from 'react'

const CardContactContent = ({icon , heading , text}) => {
  return (
    <div>
        
      <p>{icon}</p>
      <p>{heading}</p>
      <p>{text}</p>
    </div>
 
  )
}

export default CardContactContent