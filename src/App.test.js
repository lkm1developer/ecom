import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux';


test('Homepage categories Test', () => {
  render(<ReduxApp />)
  const hats = screen.getByText(/HATS/i);
  expect(hats).toBeInTheDocument();
  const jackets = screen.getByText(/JACKETS/i);
  expect(jackets).toBeInTheDocument();
  const sneakers = screen.getByText(/SNEAKERS/i);
  expect(sneakers).toBeInTheDocument();
  const womens = screen.getByText(/WOMENS/i);
  expect(womens).toBeInTheDocument();
});

const ReduxApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

test('Navigation and Redux Test', async () => {
  render(<ReduxApp />)
  const hats = screen.getByText(/HATS/i);
  expect(hats).toBeInTheDocument();
  await userEvent.click(hats)
  expect(screen.getByText(/Brown Brim/i)).toBeInTheDocument()
  const home = screen.getByText(/Home/i);
  expect(home).toBeInTheDocument();
  await userEvent.click(home)

  const jackets = screen.getByText(/JACKETS/i);
  expect(jackets).toBeInTheDocument();
  await userEvent.click(jackets)
  const GreyJeanJacket = screen.getByText(/Grey Jean Jacket/i);
  expect(GreyJeanJacket).toBeInTheDocument();
});

test('Toggle cart popup', async () => {
  render(<ReduxApp />)
  const icon=screen.getByTestId('cart-icon', {suggest: false})
  expect(icon).toBeInTheDocument();
  await userEvent.click(icon)
  const mycart = screen.getByText(/My Cart/i);
  expect(mycart).toBeInTheDocument();
});
