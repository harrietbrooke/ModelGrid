// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModelGrid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModelGrid/i);
    expect(titleElement).toBeInTheDocument();
});
