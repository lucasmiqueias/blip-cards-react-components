import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import PlainText from "../PlainText";

describe("PlainText", () => {
  it("renders text content correctly", () => {
    render(<PlainText document="Hello, world!" position="left" />);

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  it('shows "Show more" link for long content', () => {
    const longText = "A".repeat(250); // Text longer than 200 chars

    render(
      <PlainText document={longText} position="left" showMoreText="Ver mais" />
    );

    expect(screen.getByText("Ver mais")).toBeInTheDocument();
  });

  it('expands content when "Show more" is clicked', () => {
    const longText = "A".repeat(250);

    render(
      <PlainText document={longText} position="left" showMoreText="Show more" />
    );

    fireEvent.click(screen.getByText("Show more"));
    // The full text should now be visible
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it("renders with correct position class", () => {
    const { container } = render(
      <PlainText document="Test" position="right" />
    );

    expect(container.querySelector(".bubble.right")).toBeInTheDocument();
  });
});
