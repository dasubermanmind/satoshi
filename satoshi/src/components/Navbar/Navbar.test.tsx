import {render, screen} from "@testing-library/react";
import React from "react";
import Navbar from "./Navbar";

describe('<NavBar />',(): void => {
   test('should render without error',()=>{
       render(<Navbar />);
       expect(screen.getByText(/Welcome to Satoshi/i)).not.toBeNull();
   });
});

