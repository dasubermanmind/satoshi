import React from 'react';
import { render, screen } from '@testing-library/react';
import CoinList from "./CoinList";

describe('<CoinList />', ()=>{
    test('should renders without error', () => {
        render(<CoinList />);
        // expect(screen.getByText(/algohalf/i)).not.toBeNull();
    });
});