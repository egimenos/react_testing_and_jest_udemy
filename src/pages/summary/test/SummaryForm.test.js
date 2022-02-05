import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("Terms and conditions checkbox button", () => {
  test("It should be unchecked at first", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
    expect(checkbox).not.toBeChecked();
  });

  test("button should be disabled at first", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: /confirm order/i });
    expect(button).toBeDisabled();
  });

  test("button should be enabled if user clicks on checkbox first and disabled on second click", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: /confirm order/i });
    const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
