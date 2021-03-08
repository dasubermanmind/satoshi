import { render, screen } from "@testing-library/react";
import React from "react";
import Information from "./Information";

describe('<Information />',(): void => {
    test('should render without error',()=>{
        render(<Information />);
        expect(screen.getByText(/Lets Get Started/i)).not.toBeNull();
    });
});
