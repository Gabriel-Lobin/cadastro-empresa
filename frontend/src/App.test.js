import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Provider from './utils/Provider';
import App from './App';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
