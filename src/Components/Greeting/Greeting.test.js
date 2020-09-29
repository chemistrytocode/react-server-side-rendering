import React from 'react';
import { render } from '@testing-library/react';
import Greeting from './Greeting';

describe('Name', () => {
  it('renders correctly with passed prop', () => {
    const { getByText } = render(<Greeting name="Paul" />)
    const nameAndText = getByText(/Hello Paul/)
    expect(nameAndText).toBeInTheDocument();
  });
});
