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
function hasInputValue(e, inputValue) {
  return screen.getByDisplayValue(inputValue) === e
}
test('Authentication', async () => {
  render(<ReduxApp />)
  const loginBtn =screen.getByText(/Sign In/i)
  expect(loginBtn).toBeInTheDocument();
  await userEvent.click(loginBtn)

  await act(async () => {
    await new Promise((r) => setTimeout(r, 2000));
  })
  
  expect(screen.getByText('I do not have a account')).toBeTruthy()
  const signupBtn =screen.getByText(/SIGN UP/i, { selector: 'button' })
  expect(signupBtn).toBeInTheDocument();
  

  const name =screen.getAllByPlaceholderText('Display Name');
  expect(name[0]).toBeInTheDocument();
  
  const email =screen.getAllByPlaceholderText('Email');
  expect(email[1]).toBeInTheDocument();
  const password =screen.getAllByPlaceholderText('Password');
  expect(password[1]).toBeInTheDocument();
  fireEvent.change(name[0], { target: { value: 'Developer' } })
  // expect(hasInputValue(name[0], "Developer")).toBe(true)
  fireEvent.change(email[1], { target: { value: 'developer@mail.com' } })
  // expect(hasInputValue(email[1], "developer@mail.com")).toBe(true)
  fireEvent.change(password[1], { target: { value: 'Password1' } })
  // expect(hasInputValue(password[1], "Password1")).toBe(true)
  await userEvent.click(signupBtn)
  await act(async () => {
    await waitFor(() => expect(screen.getByText('loading...')).toBeTruthy())
    await new Promise((r) => setTimeout(r, 6000));
  })
  const errorMsg =screen.getByText(/Email already taken/i);
  expect(errorMsg).toBeInTheDocument();

  fireEvent.change(email[0], { target: { value: 'developer@mail.com' } })
  // expect(hasInputValue(email[0], "developer@mail.com")).toBe(true)
  fireEvent.change(password[0], { target: { value: 'Password1' } })
  // expect(hasInputValue(password[0], "Password1")).toBe(true)
  const loginBtn2 =screen.getByText(/Sign In/i, { selector: 'button' })
  expect(loginBtn2).toBeInTheDocument();
  await userEvent.click(loginBtn2)
  await act(async () => {
    await waitFor(() => expect(screen.getByText('loading...')).toBeTruthy())
    await new Promise((r) => setTimeout(r, 6000));
  })
  const userName =screen.getByText(/Sign Out/i);
  expect(userName).toBeInTheDocument();

  

});
