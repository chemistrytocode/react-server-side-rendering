import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders correctly with passed prop', () => {
    const { getByText } = render(<Home name="Paul" />)
    const nameAndText = getByText(/Hello Paul/)
    expect(nameAndText).toBeInTheDocument();
  });
});
