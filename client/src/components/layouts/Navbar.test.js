import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

//unit test
test('testing for Register text to be in document', () => {
  render(<Navbar />);
  const text = screen.getByText(/Register/i);
  expect(text).toBeInTheDocument();
});