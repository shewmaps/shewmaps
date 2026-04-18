import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderApp = () => render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

test('renders hero section with site title', () => {
  renderApp();
  expect(screen.getByRole('heading', { name: /Food Pilgrimages/i })).toBeInTheDocument();
});

test('renders navigation links', () => {
  renderApp();
  expect(screen.getByTestId('nav-pilgrimagesLink')).toBeInTheDocument();
  expect(screen.getByTestId('nav-aboutLink')).toBeInTheDocument();
});

test('renders pilgrimage hike items', () => {
  renderApp();
  expect(screen.getByTestId('hikeItem-shikoku-pilgrimage')).toBeInTheDocument();
  expect(screen.getByTestId('hikeItem-appalachian-trail')).toBeInTheDocument();
});
