import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    userEvent.click(checkbox);
    expect(button).toBeEnabled();

    userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });

  test("popover responds to hover", async () => {
    render(<SummaryForm />);
    // popover starts hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // popover apears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText("No ice cream will actually be delivered");
    expect(popover).toBeInTheDocument();

    // popover disapears when we mouse out

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actually be delivered/i));
  });
});
