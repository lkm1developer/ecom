import { render, screen, fireEvent, waitFor,act, } from '@testing-library/react';
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
  const mycart = screen.getByText(/Your cart is empty./i);
  expect(mycart).toBeInTheDocument();
});


test('Add Item to cart', async () => {
  render(<ReduxApp />)
  const home = screen.getByText(/Home/i);
  expect(home).toBeInTheDocument();
  await userEvent.click(home)
  const hats = screen.getByText(/HATS/i);
  expect(hats).toBeInTheDocument();
  await userEvent.click(hats)
  const firstProduct =screen.getByText(/Brown Brim/i)
  expect(firstProduct).toBeInTheDocument()
  await userEvent.hover(firstProduct)
  const addToCartButton =screen.getAllByText(/ADD TO CART/i)
  expect(addToCartButton[0]).toBeInTheDocument()
  await userEvent.click(addToCartButton[0])
  await userEvent.click(addToCartButton[0])
  await userEvent.click(addToCartButton[0])
  const icon=screen.getByTestId('item-count', {suggest: false})
  expect(icon).toBeInTheDocument();
  
  expect(icon.textContent).toBe("3");

});
test('Add Item to cart', async () => {
  render(<ReduxApp />)
  const home = screen.getByText(/Home/i);
  expect(home).toBeInTheDocument();
  await userEvent.click(home)
  const hats = screen.getByText(/HATS/i);
  expect(hats).toBeInTheDocument();
  await userEvent.click(hats)

  const firstProduct =screen.getByText(/Wolf Cap/i)
  expect(firstProduct).toBeInTheDocument()
  await userEvent.hover(firstProduct)
  const addToCartButton =screen.getAllByText(/ADD TO CART/i)
  expect(addToCartButton[0]).toBeInTheDocument()
  await userEvent.click(addToCartButton[0])
  await userEvent.click(addToCartButton[0])
  await userEvent.click(addToCartButton[0])

  const secondProduct =screen.getByText(/Blue Beanie/i)
  expect(secondProduct).toBeInTheDocument()
  expect(addToCartButton[1]).toBeInTheDocument()
  await userEvent.click(addToCartButton[1])
  await userEvent.click(addToCartButton[1])


  
  const icon=screen.getByTestId('item-count', {suggest: false})
  expect(icon).toBeInTheDocument();
  
  expect(icon.textContent).toBe("8");

  const checkout =screen.getByText(/GO TO CHECKOUT/i)
  expect(checkout).toBeInTheDocument();
  await userEvent.click(checkout)
  const total=screen.getByTestId('cart-total', {suggest: false})
  expect(total).toBeInTheDocument();
  
  expect(total.textContent).toBe("186");

});
jest.setTimeout(30000);
test('Payment', async () => {
  render(<ReduxApp />)
  const payNow =screen.getByText(/Pay Now/i)
  expect(payNow).toBeInTheDocument();
  const a =await userEvent.click(payNow)
  

});
