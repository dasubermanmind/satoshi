import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', ()=>{
  test('should renders without error', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Satoshi/i)).not.toBeNull();
  });
});
