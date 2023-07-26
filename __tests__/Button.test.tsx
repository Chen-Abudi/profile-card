import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/app/components/common";

describe("Button component", () => {
  test("renders the button text", () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("call onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
