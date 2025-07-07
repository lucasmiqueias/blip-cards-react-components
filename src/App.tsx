import React, { useState } from "react";
import { BlipCard } from "./index";
import { BlipDocument } from "./types";
import { ThemeToggle } from "./components/ThemeToggle";
// Import do novo design system
import "@lucasmiqueias/blip-tokens/css";

const App: React.FC = () => {
  const [documents] = useState<BlipDocument[]>([
    {
      id: "1",
      direction: "sent",
      type: "text/plain",
      date: "2025-07-06T22:04:08.174Z",
      content: "Hello! This is a simple.",
    },
    {
      id: "2",
      direction: "sent",
      type: "text/plain",
      date: "2025-07-06T22:04:08.174Z",
      content:
        "And this is a response from the right side. It can be a longer message to test how the component handles longer content and text wrapping.",
    },
    {
      id: "3",
      direction: "sent",
      type: "text/plain",
      date: "2025-07-06T22:04:08.174Z",
      content:
        "This is a very long message that should trigger the show more functionality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "4",
      direction: "sent",
      type: "application/vnd.lime.deleted-content+json",
      date: "2025-07-06T22:04:08.174Z",
      content: null,
    },
    {
      id: "5",
      direction: "sent",
      type: "application/vnd.lime.reply+json",
      date: "2025-07-06T22:04:08.174Z",
      content: {
        replied: {
          type: "text/plain",
          value: "This is my reply to your previous message!",
        },
        inReplyTo: {
          id: "2",
          type: "text/plain",
          value: "And this is a response from the right side...",
        },
      },
    },
    {
      id: "120981",
      direction: "sent",
      type: "application/vnd.lime.select+json",
      date: "2025-07-06T22:04:08.174Z",
      content: {
        scope: "immediate",
        text: "Choose an option",
        options: [
          { text: "First option" },
          { order: "2", text: "Second option" },
          {
            order: "3",
            text: "Third option",
            type: "application/json",
            value: { key1: "value1", key2: "2" },
          },
        ],
      },
    },
    {
      id: "4a699feb-c846-49a8-aa45-8f63970ec128",
      direction: "sent",
      type: "application/json",
      content: {
        recipient_type: "individual",
        type: "interactive",
        interactive: {
          type: "list",
          body: {
            text: "Posso te ajudar com dúvidas, parcerias e iniciar a contratação da nossa plataforma. \n\nE se você já é cliente Blip, posso te encaminhar para nosso suporte. \n\nÉ só escolher uma das opções: 👇",
          },
          action: {
            button: "Opções",
            sections: [
              {
                rows: [
                  {
                    id: "id:1.0",
                    title: "Como funciona? ",
                    description:
                      "Entenda como a Plataforma Blip funciona, seus benefícios, preços e mais",
                  },
                  {
                    id: "id:1.1",
                    title: "Contratar a Blip ",
                    description:
                      "Conte-nos sobre sua empresa e converse com nosso time de vendas",
                  },
                  {
                    id: "id:1.2",
                    title: "Já sou cliente Blip ",
                    description:
                      "Abra e gerencie tickets, gere relatórios, 2a via de boletos e mais",
                  },
                  {
                    id: "id:1.3",
                    title: "Cases de sucesso ",
                    description:
                      "Conheça como a Blip potencializou os resultados de empresas de sucesso",
                  },
                  {
                    id: "id:1.4",
                    title: "Parceria ",
                    description:
                      "Conheça os benefícios de ser uma empresa parceira",
                  },
                  {
                    id: "id:1.5",
                    title: "Não achei o que preciso",
                  },
                ],
              },
            ],
          },
        },
      },
      date: "2025-07-06T22:04:08.174Z",
    },
  ]);

  const memberInfo = {
    name: "Bot Assistant",
    photo:
      "https://ovicio.com.br/wp-content/uploads/2022/10/20221015-ffig-g0xoama72j-555x555.jpg",
  };

  const handleSave = (document: BlipDocument) => {
    console.log("Save document:", document);
  };

  const handleDelete = (document: BlipDocument) => {
    console.log("Delete document:", document);
  };

  return (
    <div className="app-container" style={{ width: "560px", margin: "0 auto" }}>
      <div className="app-header">
        <h1>BLiP Cards React Components Demo</h1>
        <ThemeToggle showLabels={true} />
      </div>

      <div className="app-content">
        <h2>Basic Examples</h2>

        {documents.map((doc) => (
          <BlipCard
            key={doc.id}
            document={doc}
            position={doc.direction === "received" ? "right" : "left"}
            date={new Date().toLocaleTimeString()}
            status={doc.direction === "sent" ? "sent" : "received"}
            editable={false}
            deletable={false}
            photo={doc.direction === "sent" ? memberInfo.photo : undefined}
            onSave={handleSave}
            onDelete={handleDelete}
            translations={{
              showMoreText: "Ver mais",
              messageDeleted: "Esta mensagem foi excluída",
              externalMessageText: "Mensagem externa",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
