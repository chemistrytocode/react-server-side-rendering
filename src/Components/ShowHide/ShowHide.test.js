import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowHide from './ShowHide';

describe('Counter', () => {

    it('shows text on initial render', () => {
        const { getByText } = render(<ShowHide />);
        const text = getByText(/Display is Visible!/)

        expect(text).toBeInTheDocument();
    });

    it('hides text when state is false', () => {
        const { getByText, queryByText } = render(<ShowHide />);
        const toggleDisplay = getByText(/Toggle Display!/)

        fireEvent.click(toggleDisplay);
        const text = queryByText(/Display is Visible!/)

        expect(text).not.toBeInTheDocument();
    });

    it('shows text when state is true', () => {
        const { getByText, queryByText } = render(<ShowHide />);
        const toggleDisplay = getByText(/Toggle Display!/)

        fireEvent.click(toggleDisplay);
        fireEvent.click(toggleDisplay);
        const text = queryByText(/Display is Visible!/)

        expect(text).toBeInTheDocument();
    });
});