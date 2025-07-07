import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Modelo from "../index";

describe("Modelo Component", () => {
  it("renders with basic props", () => {
    const { getByText } = render(<Modelo text="Test Component" />);
    expect(getByText("Test Component")).toBeDefined();
  });

  it("applies correct variant classes", () => {
    const { getByText, rerender } = render(
      <Modelo text="Test" variant="primary" />
    );
    expect(
      getByText("Test")
        .closest(".modelo")
        ?.classList.contains("modelo--primary")
    ).toBe(true);

    rerender(<Modelo text="Test" variant="secondary" />);
    expect(
      getByText("Test")
        .closest(".modelo")
        ?.classList.contains("modelo--secondary")
    ).toBe(true);

    rerender(<Modelo text="Test" variant="tertiary" />);
    expect(
      getByText("Test")
        .closest(".modelo")
        ?.classList.contains("modelo--tertiary")
    ).toBe(true);
  });

  it("applies correct size classes", () => {
    const { getByText, rerender } = render(<Modelo text="Test" size="small" />);
    expect(
      getByText("Test").closest(".modelo")?.classList.contains("modelo--small")
    ).toBe(true);

    rerender(<Modelo text="Test" size="medium" />);
    expect(
      getByText("Test").closest(".modelo")?.classList.contains("modelo--medium")
    ).toBe(true);

    rerender(<Modelo text="Test" size="large" />);
    expect(
      getByText("Test").closest(".modelo")?.classList.contains("modelo--large")
    ).toBe(true);
  });

  it("handles disabled state", () => {
    const { getByText } = render(<Modelo text="Test" disabled />);

    const component = getByText("Test").closest(".modelo");
    expect(component?.classList.contains("modelo--disabled")).toBe(true);
    expect(component?.getAttribute("aria-disabled")).toBe("true");
  });

  it("handles loading state", () => {
    const { getByText } = render(<Modelo text="Test" loading />);

    const component = getByText("Test").closest(".modelo");
    expect(component?.classList.contains("modelo--loading")).toBe(true);
    expect(component?.getAttribute("aria-busy")).toBe("true");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Modelo text="Test" onClick={handleClick} />);

    fireEvent.click(getByText("Test"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Modelo text="Test" onClick={handleClick} disabled />
    );

    fireEvent.click(getByText("Test"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not call onClick when loading", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Modelo text="Test" onClick={handleClick} loading />
    );

    fireEvent.click(getByText("Test"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders children when provided", () => {
    const { getByText } = render(
      <Modelo text="Test">
        <span>Child content</span>
      </Modelo>
    );

    expect(getByText("Child content")).toBeDefined();
  });

  it("applies custom className", () => {
    const { getByText } = render(
      <Modelo text="Test" className="custom-class" />
    );

    expect(
      getByText("Test").closest(".modelo")?.classList.contains("custom-class")
    ).toBe(true);
  });

  it("has correct accessibility attributes when clickable", () => {
    const { getByText } = render(<Modelo text="Test" onClick={() => {}} />);

    const component = getByText("Test").closest(".modelo");
    expect(component?.getAttribute("role")).toBe("button");
    expect(component?.getAttribute("tabIndex")).toBe("0");
  });

  it("does not have button role when not clickable", () => {
    const { getByText } = render(<Modelo text="Test" />);

    const component = getByText("Test").closest(".modelo");
    expect(component?.getAttribute("role")).toBeNull();
    expect(component?.getAttribute("tabIndex")).toBeNull();
  });
});
