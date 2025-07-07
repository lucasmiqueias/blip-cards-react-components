import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WhatsAppList from "../index";
import { BlipDocument } from "../../../../../types";

describe("WhatsAppList Component", () => {
  const mockDocument: BlipDocument = {
    id: "test-id",
    type: "application/json",
    date: "2025-07-06T22:04:08.174Z",
    content: {
      recipient_type: "individual",
      type: "interactive",
      interactive: {
        type: "list",
        body: {
          text: "Escolha uma opção:",
        },
        action: {
          button: "Opções",
          sections: [
            {
              rows: [
                {
                  id: "id:1.0",
                  title: "Primeira opção",
                  description: "Descrição da primeira opção",
                },
                {
                  id: "id:1.1",
                  title: "Segunda opção",
                  description: "Descrição da segunda opção",
                },
              ],
            },
          ],
        },
      },
    },
  };

  const mockProps = {
    document: mockDocument,
    position: "left" as const,
    interactive: mockDocument.content.interactive,
  };

  it("renders with basic props", () => {
    const { getByText } = render(<WhatsAppList {...mockProps} />);
    expect(getByText("Escolha uma opção:")).toBeDefined();
    expect(getByText("Opções")).toBeDefined();
  });

  it("renders all list options", () => {
    const { getByText } = render(<WhatsAppList {...mockProps} />);
    expect(getByText("Primeira opção")).toBeDefined();
    expect(getByText("Descrição da primeira opção")).toBeDefined();
    expect(getByText("Segunda opção")).toBeDefined();
    expect(getByText("Descrição da segunda opção")).toBeDefined();
  });

  it("renders button with correct text", () => {
    const { getByText } = render(<WhatsAppList {...mockProps} />);
    expect(getByText("Opções")).toBeDefined();
  });

  it("applies correct CSS classes", () => {
    const { container } = render(<WhatsAppList {...mockProps} />);
    expect(container.querySelector(".whatsapp-list-container")).toBeDefined();
    expect(container.querySelector(".whatsapp-list-body")).toBeDefined();
    expect(container.querySelector(".whatsapp-list-action")).toBeDefined();
    expect(container.querySelector(".whatsapp-list-button")).toBeDefined();
  });
});
