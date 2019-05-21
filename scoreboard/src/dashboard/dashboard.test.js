import React from 'react'
import { render } from 'react-testing-library'

import Dashboard from './Dashboard'

describe('Dashboard component', () => {

  it('should render without crashing', () => {
    render(<Dashboard />);
  })
})