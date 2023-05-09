import { render, screen, fireEvent, waitFor,act, } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux';
import { renderWithProviders } from "./utils-for-tests";

const NApp = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
)

test('Homepage categories Test', () => {
  renderWithProviders(<NApp />);
  const hats = screen.getByText(/HATS/i);
  expect(hats).toBeInTheDocument();
  const jackets = screen.getByText(/JACKETS/i);
  expect(jackets).toBeInTheDocument();
  const sneakers = screen.getByText(/SNEAKERS/i);
  expect(sneakers).toBeInTheDocument();
  const womens = screen.getByText(/WOMENS/i);
  expect(womens).toBeInTheDocument();
});



test('Navigation and Redux Test', async () => {
  renderWithProviders(<NApp />);
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
  renderWithProviders(<NApp />);
  const icon=screen.getByTestId('cart-icon', {suggest: false})
  expect(icon).toBeInTheDocument();
  await userEvent.click(icon)
  const mycart = screen.getByText(/Your cart is empty./i);
  expect(mycart).toBeInTheDocument();
});


test('Add Item to cart', async () => {
  renderWithProviders(<NApp />);
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
test('GO TO CHECKOUT', async () => {
  renderWithProviders(<NApp />);
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
 
  expect(icon.textContent).toBe("5");
  await userEvent.click(icon)
  const checkout =screen.getByText(/GO TO CHECKOUT/i)
  expect(checkout).toBeInTheDocument();
  await userEvent.click(checkout)
  const total=screen.getByTestId('cart-total', {suggest: false})
  expect(total).toBeInTheDocument();
  
  expect(total.textContent).toBe("111");

});

test('Payment', async () => {
  renderWithProviders(<NApp />);
  const payNow =screen.getByText(/Pay Now/i)
  expect(payNow).toBeInTheDocument();
  userEvent.click(payNow)
  

});
function hasInputValue(e, inputValue) {
  return screen.getByDisplayValue(inputValue) === e
}
test('check login/signup btn', async () => {
  renderWithProviders(<NApp />);
  const loginBtn =screen.getByText(/Sign In/i)
  expect(loginBtn).toBeInTheDocument();
  await userEvent.click(loginBtn)

  await act(async () => {
    await new Promise((r) => setTimeout(r, 200));
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
  

  

});
test('duplicate signup', async () => {
  renderWithProviders(<NApp />);
  const loginBtn =screen.findAllByText(/Sign In/i)
  if(loginBtn && loginBtn.length==1){
    expect(loginBtn[0]).toBeInTheDocument();
    await userEvent.click(loginBtn[0])
  
    await act(async () => {
      await new Promise((r) => setTimeout(r, 500));
    })
  } else{
    //already on login page
  }
  
  
 
  const signupBtn =screen.getByText(/SIGN UP/i, { selector: 'button' })

  const name =screen.getAllByPlaceholderText('Display Name');
  
  const email =screen.getAllByPlaceholderText('Email');
  expect(email[1]).toBeInTheDocument();
  const password =screen.getAllByPlaceholderText('Password');
  expect(password[1]).toBeInTheDocument();
  fireEvent.change(name[0], { target: { value: 'Developer' } })
  fireEvent.change(email[1], { target: { value: 'developer@mail.com' } })
  fireEvent.change(password[1], { target: { value: 'Password1' } })
  await userEvent.click(signupBtn)
  await act(async () => {
    await waitFor(() => expect(screen.getByText('loading...')).toBeTruthy())
    await new Promise((r) => setTimeout(r, 3000));
  })
  const errorMsg =screen.getByText(/Email already taken/i);
  expect(errorMsg).toBeInTheDocument();

  

});
test('login', async () => {
  renderWithProviders(<NApp />);
  const loginBtn =screen.findAllByText(/Sign In/i)
  if(loginBtn && loginBtn.length==1){
    expect(loginBtn[0]).toBeInTheDocument();
    await userEvent.click(loginBtn[0])
  
    await act(async () => {
      await new Promise((r) => setTimeout(r, 500));
    })
  } else{
    //already on login page
  }
  const email =screen.getAllByPlaceholderText('Email');
  const password =screen.getAllByPlaceholderText('Password');
  fireEvent.change(email[0], { target: { value: 'developer@mail.com' } })
  fireEvent.change(password[0], { target: { value: 'Password1' } })
  const loginBtn2 =screen.getByText(/Sign In/i, { selector: 'button' })
  expect(loginBtn2).toBeInTheDocument();
  await userEvent.click(loginBtn2)
  await act(async () => {
    await waitFor(() => expect(screen.getByText('loading...')).toBeTruthy())
    await new Promise((r) => setTimeout(r, 2000));
  })
  const userName =screen.getByText(/Sign Out/i);
  expect(userName).toBeInTheDocument();
});
