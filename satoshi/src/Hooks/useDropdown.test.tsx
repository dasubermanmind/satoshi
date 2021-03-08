import { screen } from "@testing-library/react";

describe('use Drop down hook',(): void => {
    test('should render without error',()=>{
        expect(screen.getByText(/tbd/i)).not.toBeNull();
    });
});

