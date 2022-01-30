import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("initial conditions", () => {
  render(<App />);

  //Initial state of the button is enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // initial state of the checkbox
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("checkbox disables button first click and enables it second click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button is gray when disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
