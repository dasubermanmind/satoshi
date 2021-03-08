import { render, screen } from "@testing-library/react";
import React from "react";

import Prices from "./Prices";

describe('<Prices />',(): void => {
    test('should render without error',()=>{
        render(<Prices />);
        expect(screen.getByText(/prices/i)).not.toBeNull();
    });
});

