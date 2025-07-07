import { describe, it, expect } from "vitest";
import { render, getByText } from "@testing-library/react";
import QuickReply from "../index";
import { BlipDocument } from "../../../types";

describe("QuickReply", () => {
  it("renders quick reply text correctly", () => {
    const quickReplyDocument: BlipDocument = {
      id: "quick-reply-1",
      type: "application/vnd.lime.select+json",
      date: "2024-01-01T00:00:00.000Z",
      content: {
        scope: "immediate",
        text: "Choose an option:",
        options: [
          { order: 1, text: "Option 1", value: { action: "option1" } },
          { order: 2, text: "Option 2", value: { action: "option2" } },
        ],
      },
    };

    const { container } = render(
      <QuickReply document={quickReplyDocument} position="left" />
    );

    expect(getByText(container, "Choose an option:")).toBeDefined();
    expect(getByText(container, "Option 1")).toBeDefined();
    expect(getByText(container, "Option 2")).toBeDefined();
  });

  it("renders options in correct order", () => {
    const quickReplyDocument: BlipDocument = {
      id: "quick-reply-2",
      type: "application/vnd.lime.select+json",
      date: "2024-01-01T00:00:00.000Z",
      content: {
        scope: "immediate",
        text: "Select:",
        options: [
          { order: 3, text: "Third", value: { action: "third" } },
          { order: 1, text: "First", value: { action: "first" } },
          { order: 2, text: "Second", value: { action: "second" } },
        ],
      },
    };

    const { container } = render(
      <QuickReply document={quickReplyDocument} position="left" />
    );

    const options = container.querySelectorAll(".quick-reply-option");
    expect(options[0].textContent).toBe("First");
    expect(options[1].textContent).toBe("Second");
    expect(options[2].textContent).toBe("Third");
  });

  it("renders with correct position classes", () => {
    const quickReplyDocument: BlipDocument = {
      id: "quick-reply-4",
      type: "application/vnd.lime.select+json",
      date: "2024-01-01T00:00:00.000Z",
      content: {
        scope: "immediate",
        text: "Position test:",
        options: [{ order: 1, text: "Option", value: {} }],
      },
    };

    const { container: leftContainer } = render(
      <QuickReply document={quickReplyDocument} position="left" />
    );

    expect(leftContainer.querySelector(".blip-grid--row")).toBeTruthy();
    expect(
      leftContainer.querySelector(".quick-reply-option--left")
    ).toBeTruthy();

    const { container: rightContainer } = render(
      <QuickReply document={quickReplyDocument} position="right" />
    );

    expect(
      rightContainer.querySelector(".blip-grid--row-reverse")
    ).toBeTruthy();
    expect(
      rightContainer.querySelector(".quick-reply-option--right")
    ).toBeTruthy();
  });

  it("renders without options when options array is empty", () => {
    const quickReplyDocument: BlipDocument = {
      id: "quick-reply-5",
      type: "application/vnd.lime.select+json",
      date: "2024-01-01T00:00:00.000Z",
      content: {
        scope: "immediate",
        text: "No options here",
        options: [],
      },
    };

    const { container } = render(
      <QuickReply document={quickReplyDocument} position="left" />
    );

    expect(getByText(container, "No options here")).toBeDefined();
    expect(container.querySelector(".quick-reply-option")).toBeNull();
  });

  it("renders without options when options is undefined", () => {
    const quickReplyDocument: BlipDocument = {
      id: "quick-reply-6",
      type: "application/vnd.lime.select+json",
      date: "2024-01-01T00:00:00.000Z",
      content: {
        scope: "immediate",
        text: "No options defined",
      },
    };

    const { container } = render(
      <QuickReply document={quickReplyDocument} position="left" />
    );

    expect(getByText(container, "No options defined")).toBeDefined();
    expect(container.querySelector(".quick-reply-option")).toBeNull();
  });

  it("handles options without order property", () => {
    const quickReplyDocument: BlipDocument = {
      id: "quick-reply-7",
      type: "application/vnd.lime.select+json",
      date: "2024-01-01T00:00:00.000Z",
      content: {
        scope: "immediate",
        text: "Unordered options:",
        options: [
          { text: "Option A" },
          { text: "Option B" },
          { text: "Option C" },
        ],
      },
    };

    const { container } = render(
      <QuickReply document={quickReplyDocument} position="left" />
    );

    expect(getByText(container, "Option A")).toBeDefined();
    expect(getByText(container, "Option B")).toBeDefined();
    expect(getByText(container, "Option C")).toBeDefined();
  });
});
