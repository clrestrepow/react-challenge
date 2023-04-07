import React from 'react';
import { render, screen } from '@testing-library/react';
import BankCard from './BankCard';

test('renders bank card', () => {
  const item = {
    bankName: "Banco de pruebas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    age: 10,
    url: "https://i.imgur.com/xjaMIKB.png",

  }
  render(<BankCard bank={item} />);
  const linkElement = screen.getByText(/Banco de pruebas/i);
  expect(linkElement).toBeInTheDocument();
});
