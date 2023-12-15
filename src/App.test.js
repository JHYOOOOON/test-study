import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates color after click", () => {
  render(<App />);

  // find and element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeDisabled();
});

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: red");
});

test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: blue");
});
