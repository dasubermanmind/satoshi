import { render, screen } from "@testing-library/react";
import React from "react";

import Sort from "./Sort";

describe('<Sort />',(): void => {
    test('should render without error',()=>{
        render(<Sort />);
        expect(screen.getByText(/Welcome to Satoshi/i)).not.toBeNull();
    });
});

