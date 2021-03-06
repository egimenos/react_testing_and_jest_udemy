import { render, screen, fireEvent } from "@testing-library/react";
import { replaceCamelWithSpaces } from "./FirstExercise";
import FirstExercise from "./FirstExercise";

test("initial conditions", () => {
  render(<FirstExercise />);

  //Initial state of the button is enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  // initial state of the checkbox
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button turns blue when clicked", () => {
  render(<FirstExercise />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("checkbox disables button first click and enables it second click", () => {
  render(<FirstExercise />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button is gray when disabled", () => {
  render(<FirstExercise />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
