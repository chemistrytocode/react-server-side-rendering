import React from 'react';
import { render, within, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
    it('renders correctly with two buttons', () => {
        const { getAllByRole } = render(<Counter />);
        const buttons = getAllByRole('button');
        const increment = within(buttons[0]).getByText('Increment Counter!')
        const decrement = within(buttons[1]).getByText('Decrement Counter!')

        expect(buttons).toHaveLength(2);
        expect(increment).toBeInTheDocument();
        expect(decrement).toBeInTheDocument();
    });

    it('renders increment correctly when clicked', () => {
        const { getByText } = render(<Counter />);

        fireEvent.click(getByText(/Increment Counter!/i));
        const text = getByText(/You clicked 1 times/);

        expect(text).toBeInTheDocument();
    });

    it('renders decrement when clicked', () => {
        const { getByText } = render(<Counter />);

        fireEvent.click(getByText(/Decrement Counter!/i));
        const text = getByText(/You clicked -1 times/);

        expect(text).toBeInTheDocument();
    });
});