import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import GoogleButton from './Login'

afterEach(cleanup)

describe("<GoogleButton />", () => {
    it("renders google button", () => {
        const {getByText, debug} = render(<GoogleButton />);
        debug()
        getByText(/Sign in with Google/i);
    })
    
    // it("renders the display", () => {
    //     const { getByTestId } = render(<Dashboard />);
    //     const display = getByTestId("display");
    //     expect(display).toHaveClass("display panel");
    //   });

})