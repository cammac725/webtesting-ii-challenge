import React from 'react';

function Dashboard(props) {
  return (
    <div className='dashboard'>
      <div className='top-btns'>
        <button
          data-testid='ball-button'
          onClick={() => props.ballHandler()}>
          Balls
        </button>
        <button
          data-testid='strike-button'
          onClick={() => props.strikeHandler()}>
          Strikes
        </button>
        <button
          data-testid='foul-button'
          onClick={() => props.foulHandler()}>
          Fouls
        </button>
      </div>
      <div className='hit-btn'>
        <button
          data-testid='hit-button'
          onClick={() => props.hitHandler()}>
          Hits
        </button>
      </div>

    </div>
  )
}

export default Dashboard;