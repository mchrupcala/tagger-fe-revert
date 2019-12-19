import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import AppContainer from './AppContainer'
import {BrowserRouter as Router} from 'react-router-dom'
import { render } from "@testing-library/react"
import App from './App'

describe("renders AppContainer", () => {
  it("renders w/o crashing", () => {
    render(
      <Router>
        <AppContainer />
      </Router>
    );
  });
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});

