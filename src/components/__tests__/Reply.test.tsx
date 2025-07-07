import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Reply from "../Reply";
import { BlipDocument } from "../../types";

describe("Reply", () => {
  it("renders reply with text content correctly", () => {
    const replyDocument: BlipDocument = {
      id: "reply-1",
      type: "application/vnd.lime.reply+json",
      content: {
        replied: {
          type: "text/plain",
          value: "This is my reply",
        },
        inReplyTo: {
          id: "original-1",
          type: "text/plain",
          value: "Original message text",
        },
      },
    };

    render(<Reply document={replyDocument} position="left" />);

    expect(screen.getByText("This is my reply")).toBeInTheDocument();
    expect(screen.getByText("Original message text")).toBeInTheDocument();
  });

  it("renders reply with image reference correctly", () => {
    const replyDocument: BlipDocument = {
      id: "reply-2",
      type: "application/vnd.lime.reply+json",
      content: {
        replied: {
          type: "text/plain",
          value: "Nice image!",
        },
        inReplyTo: {
          id: "image-1",
          type: "image/png",
          value: {
            title: "Test Image.png",
            uri: "https://example.com/image.png",
          },
        },
      },
    };

    render(<Reply document={replyDocument} position="right" />);

    expect(screen.getByText("Nice image!")).toBeInTheDocument();
    expect(screen.getByText("png")).toBeInTheDocument();
  });

  it("renders reply with correct position class", () => {
    const replyDocument: BlipDocument = {
      id: "reply-3",
      type: "application/vnd.lime.reply+json",
      content: {
        replied: {
          type: "text/plain",
          value: "Test reply",
        },
        inReplyTo: {
          id: "original-1",
          type: "text/plain",
          value: "Original text",
        },
      },
    };

    const { container } = render(
      <Reply document={replyDocument} position="right" />
    );

    expect(container.querySelector(".blip-grid--row-reverse")).toBeTruthy();
  });

  it("returns null for invalid reply content", () => {
    const invalidDocument: BlipDocument = {
      id: "invalid-1",
      type: "application/vnd.lime.reply+json",
      content: null,
    };

    const { container } = render(
      <Reply document={invalidDocument} position="left" />
    );

    expect(container.firstChild).toBeNull();
  });
});
