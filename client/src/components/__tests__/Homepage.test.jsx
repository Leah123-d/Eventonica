import React from 'react'
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'
import HomePage from '../HomePage';


test('renders homepage component', () => {
  render(<HomePage/>);
  expect(screen.getByText(/Eventonica/i)).toBeInTheDocument();
});