import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BlipCard from "../BlipCard";
import { BlipDocument } from "../../types";

describe("BlipCard", () => {
  const mockDocument: BlipDocument = {
    id: "1",
    type: "text/plain",
    content: "Hello, world!",
  };

  it("renders text content correctly", () => {
    render(<BlipCard document={mockDocument} position="left" />);

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  it("renders with correct position class", () => {
    const { container } = render(
      <BlipCard document={mockDocument} position="right" />
    );

    expect(container.querySelector(".bubble.right")).toBeInTheDocument();
  });

  it("shows member info when provided", () => {
    const memberInfo = {
      name: "Test User",
      photo: "test.jpg",
    };

    render(
      <BlipCard
        document={mockDocument}
        position="left"
        memberInfo={memberInfo}
      />
    );

    expect(screen.getByText("Test User")).toBeInTheDocument();
  });

  it("shows edit button when editable is true", () => {
    render(
      <BlipCard document={mockDocument} position="left" editable={true} />
    );

    expect(screen.getByTitle("Edit")).toBeInTheDocument();
  });

  it("shows delete button when deletable is true", () => {
    render(
      <BlipCard document={mockDocument} position="left" deletable={true} />
    );

    expect(screen.getByTitle("Delete")).toBeInTheDocument();
  });

  it("calls onDelete when delete button is clicked", () => {
    const onDelete = vi.fn();

    render(
      <BlipCard
        document={mockDocument}
        position="left"
        deletable={true}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByTitle("Delete"));
    expect(onDelete).toHaveBeenCalledWith(mockDocument);
  });

  it("renders deleted content message", () => {
    const deletedDocument: BlipDocument = {
      id: "2",
      type: "application/vnd.lime.deleted-content+json",
      content: null,
    };

    render(<BlipCard document={deletedDocument} position="left" />);

    expect(screen.getByText("This message was deleted")).toBeInTheDocument();
  });

  it("renders date when provided", () => {
    render(
      <BlipCard document={mockDocument} position="left" date="12:34 PM" />
    );

    expect(screen.getByText("12:34 PM")).toBeInTheDocument();
  });

  it("shows status indicators", () => {
    render(
      <BlipCard
        document={mockDocument}
        position="right"
        status="sent"
        date="12:34 PM"
      />
    );

    expect(screen.getByText(/12:34 PM ✓/)).toBeInTheDocument();
  });
});
