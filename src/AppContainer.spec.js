import React from 'react'

// import { fireEvent, cleanup } from "@testing-library/react-hooks";
import {render, fireEvent, cleanup } from "@testing-library/react";
import AppContainer from './AppContainer'

test('shold render AppContainer', () => {
    const {container} = render(<AppContainer/>)
})
