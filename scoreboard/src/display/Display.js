import React from 'react';

function Display(props) {
  const { balls, strikes } = props

  return (
    <div>
      <div data-testid='ball-count'>{`Balls: ${balls}`}</div>
      <div data-testid='strike-count'>{`Strikes: ${strikes}`}</div>
    </div>
  )
}

export default Display;
