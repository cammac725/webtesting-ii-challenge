import React from 'react';

function Dashboard(props) {
  return (
    <div>
      <button
        data-testid='ball-button'
        onClick={() => props.ballHandler}>
        Balls
      </button>
      <button
        data-testid='strike-button'
        onClick={() => props.strikeHandler}>
        Strikes
      </button>
      <button
        data-testid='foul-button'
        onClick={() => props.foulHandler}>
        Foul Balls
      </button>
      <button
        data-testid='hit-button'
        onClick={() => props.hitHandler}>
        Hits
      </button>
    </div>
  )
}

export default Dashboard;