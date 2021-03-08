import { render, screen } from "@testing-library/react";
import React from "react";
import Coin from "./Coin";

describe('<CoinList />', ()=>{
    test('should renders without error', () => {
        const mockId = "0-5x-long-algorand-token";
        const mockSymbol = 'algohalf';
        const mockName = 'Long Algorand Token';

        render(<Coin id={mockId} name={mockName} symbol={mockSymbol} />);
        expect(screen.getByText(/algohalf/i)).not.toBeNull();
    });
});
