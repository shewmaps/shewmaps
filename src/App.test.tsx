import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero section with author name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Brandon Shewmake/i })).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByTestId('nav-pilgrimagesLink')).toBeInTheDocument();
  expect(screen.getByTestId('nav-contactLink')).toBeInTheDocument();
});

test('renders pilgrimage hike items', () => {
  render(<App />);
  expect(screen.getByTestId('hikeItem-shikoku-pilgrimage')).toBeInTheDocument();
  expect(screen.getByTestId('hikeItem-appalachian-trail')).toBeInTheDocument();
});
