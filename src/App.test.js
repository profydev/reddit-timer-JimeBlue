import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Header', () => {
  test('logo link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /Application logo/i });
    screen.debug(link);
    userEvent.click(link);

    expect(
      screen.getByRole('heading', { name: /This is the HomePage/i }),
    ).toBeInTheDocument();
  });
});
