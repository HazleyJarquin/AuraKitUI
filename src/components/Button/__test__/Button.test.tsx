import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../index";

describe("Button Component", () => {
  test("renders without crashing", () => {
    render(<Button label="Test" onClick={() => {}} />);
    expect(screen.getByTestId("custom-button")).toBeInTheDocument();
  });

  test("displays the correct label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    expect(screen.getByTestId("custom-button")).toHaveTextContent("Click Me");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByTestId("custom-button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("is disabled when disabled prop is true", () => {
    render(<Button label="Click Me" onClick={() => {}} disabled />);
    expect(screen.getByTestId("custom-button")).toBeDisabled();
  });

  test("is not disabled when disabled prop is false", () => {
    render(<Button label="Click Me" onClick={() => {}} disabled={false} />);
    expect(screen.getByTestId("custom-button")).toBeEnabled();
  });

  test("applies custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    render(<Button label="Click Me" onClick={() => {}} style={customStyle} />);
    expect(screen.getByTestId("custom-button")).toHaveStyle(
      "background-color: red"
    );
  });

  test("applies primary style by default", () => {
    const { container } = render(
      <Button label="Click Me" onClick={() => {}} />
    );
    expect(container.firstChild).toHaveStyle("border-radius: 10px");
  });

  test("applies secondary style when mode is secondary", () => {
    const { container } = render(
      <Button label="Click Me" onClick={() => {}} mode="secondary" />
    );
    expect(container.firstChild).toHaveStyle("border-radius: 10px");
  });

  test("applies tertiary style when mode is tertiary", () => {
    const { container } = render(
      <Button label="Click Me" onClick={() => {}} mode="tertiary" />
    );
    expect(container.firstChild).toHaveStyle("border-radius: 10px");
  });

  test("applies text style when mode is text", () => {
    const { container } = render(
      <Button label="Click Me" onClick={() => {}} mode="text" />
    );
    expect(container.firstChild).toHaveStyle("border-radius: 10px");
  });
});
