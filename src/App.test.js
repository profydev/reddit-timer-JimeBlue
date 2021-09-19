import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Header', () => {
  const links = [{ name: /how it works/i }, { name: /about/i }];

  test.each(links)('Check if Nav Bar have %s link.', (link) => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkDom = screen.getByRole('link', { name: link.name });
    userEvent.click(linkDom);

    expect(
      screen.getByRole('heading', { name: link.name }),
    ).toBeInTheDocument();
  });
  test('Check if have logo and link to home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: /Application Logo/i });
    userEvent.click(link);

    expect(link).toHaveAttribute('href', '/');

    expect(screen.getByAltText(/Application Logo/)).toBeInTheDocument();
  });
});
