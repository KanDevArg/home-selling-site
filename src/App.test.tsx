import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders universal search component', () => {
  render(<App />);
  const uSearchElement = screen.getByText(/Universal Search/i);
  expect(uSearchElement).toBeInTheDocument();
});
