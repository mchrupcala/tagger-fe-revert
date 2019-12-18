import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppContainer from '.AppContainer';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import App from './App'

test('full app rendering/navigating', () => {
    const {container, getByText} = render(
        <Router>
         <AppContainer />
        </Router>
    )
    //verify page content for expected route
    expect(container.innerHTML).toMatch('Layout')
})

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

