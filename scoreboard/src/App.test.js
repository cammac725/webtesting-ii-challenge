import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('<App />', () => {

  it('renders without crashing', () => {
    render(<App />);
    cleanup();
  })

  it('displays balls and strikes count', () => {
    const { getByText } = render(<App />);
    const text = getByText(/scoreboard/i);
    expect(text).toBeInTheDocument()
    cleanup()
  })

  it('should increase ball count when balls button clicked', () => {
    const { getByText, getByTestId } = render(<App />);
    const button = getByTestId('ball-button');
    fireEvent.click(button)
    const buttonResult = getByText(/balls:/i).textContent;
    expect(buttonResult).toBe('Balls: 1');
    fireEvent.click(button) // ball 2
    fireEvent.click(button) // ball 3
    fireEvent.click(button) // ball 4, should reset to 0
    const fourthBall = getByText(/balls:/i).textContent
    expect(fourthBall).toBe('Balls: 0')
    cleanup()
  })

  it('should increase strike count when strikes button clicked', () => {
    const { getByText, getByTestId } = render(<App />)
    const button = getByTestId('strike-button');
    fireEvent.click(button)
    const buttonResult = getByText(/strikes:/i).textContent
    expect(buttonResult).toBe('Strikes: 1')
    fireEvent.click(button) //strike 2
    fireEvent.click(button) //strike 3, should reset to 0
    const thirdStrike = getByText(/strikes:/i).textContent
    expect(thirdStrike).toBe('Strikes: 0')
  })
})
