import { render, screen } from "@testing-library/react";
import React from "react";

import Search from "./Search";

describe('<Search />',(): void => {
    test('should render without error',()=>{
        render(<Search />);
        expect(screen.getByText(/Welcome to Satoshi/i)).not.toBeNull();
    });
});

