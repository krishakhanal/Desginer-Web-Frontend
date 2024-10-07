import React from 'react'
import './heading.css'

export const Heading = ({redtext , whitetext , text}) => {
  return (
    <div className='heading'>
        <h1 style={{ color: ' #FF6F61', display: 'inline' }}> {redtext}</h1>
        <h1 style={{ display: 'inline' }}> {whitetext}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod keoi tempor <br/>
        incididunt ut labore et dolore magna aliqua.</p>

    </div>
  )
}
