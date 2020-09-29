import React from 'react';
import { render } from '@testing-library/react';
import Name from './Name';

describe('Name', () => {
  it('renders correctly with passed prop', () => {
    const { getByText } = render(<Name name="Paul" />)
    const nameAndText = getByText(/Hello Paul/)
    expect(nameAndText).toBeInTheDocument();
  });
});
