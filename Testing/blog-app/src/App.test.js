import { render, screen } from "@testing-library/react";
import App from './App';

test("Testing for screen reading", () => {
  render(<App />);
  let screentext = screen.getByText("my name is Abhijit Ranjan");
  expect(screentext).toBeInTheDocument();
});

test("Testing for screen reading", () => {
  render(<App />);
  let screentext = screen.getByAltText("kashmir");
  let screenTitle = screen.getByTitle("Kashmir ki wadiyan");
  expect(screentext).toBeInTheDocument();
  expect(screenTitle).toBeInTheDocument();
});

test("Testing for inputvalue", () => {
  render(<App />);
  // for checking inputbox is exist or not
  const inputType = screen.getByRole("textbox");
  expect(inputType).toBeInTheDocument();

  // for checking inputbox placeholder is right or not
  const inputBoxPlaceholder = screen.getByPlaceholderText("Enter Username");
  expect(inputBoxPlaceholder).toBeInTheDocument()

  // for checking inputbox value
  expect(inputType).toHaveValue("Abhijit Ranjan");

  // for type
  expect(inputType).toHaveAttribute("type", "text");

  // for name attribute
  expect(inputType).toHaveAttribute("name", "UserName");

  // for id attribute
  expect(inputType).toHaveAttribute("id", "UserId");

  // for className
  expect(inputType).toHaveClass("UserClass");
})




















// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
