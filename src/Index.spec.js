import React from "react";
import { create, act } from "react-test-renderer";
import App from "./App"; //or import App from './index
import { render } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom'

//render the component

describe("renders App", () => {
  it("renders w/o crashing", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});



