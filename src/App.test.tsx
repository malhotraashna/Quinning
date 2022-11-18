import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header correctly', () => {
  // when
  render(<App />);

  // then
  const headerElement = screen.getByText(/My Launches/i);
  expect(headerElement).toBeInTheDocument();
});
