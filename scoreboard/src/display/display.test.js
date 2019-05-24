import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect';

import Display from './Display';

describe('Display component', () => {

  it('should render without crashing', () => {
    render(<Display />);
    cleanup();
  })

  it('should display balls', () => {
    const { getByText } = render(<Display />)
    const text = getByText(/balls:/i)
    expect(text).toBeInTheDocument()
    cleanup()
  })

  it('should display strikes', () => {
    const { getByText } = render(<Display />)
    const text = getByText(/strikes:/i)
    expect(text).toBeInTheDocument()
    cleanup()
  })

  it('should display balls and strikes passed in as props', () => {
    const { getByText } = render(<Display balls={1} strikes={2} />)
    const balls = getByText(/1/)
    const strikes = getByText(/2/)
    expect(balls).toBeInTheDocument()
    expect(strikes).toBeInTheDocument()
  })

})