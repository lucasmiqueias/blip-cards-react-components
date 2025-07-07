import React from "react";
import { BlipCardProps, BlipDocument } from "../types";

// Componente específico para WhatsApp
import WhatsAppRenderer from "./WhatsApp/index";

const ChannelContent: React.FC<BlipCardProps> = (props) => {
  const {
    document,
    position,
    editable = false,
    deletable = false,
    memberInfo,
    editing = false,
    externalMessage = false,
    onSave,
    onDelete,
    onCancel,
    onEdit,
  } = props;

  // Handlers
  const handleSave = (newDocument: BlipDocument) => onSave?.(newDocument);
  const handleDelete = (documentToDelete: BlipDocument) =>
    onDelete?.(documentToDelete);
  const handleEdit = () => onEdit?.();
  const handleCancel = () => onCancel?.();

  if (
    document.content?.type === "interactive" ||
    document.type === "application/json"
  ) {
    // WhatsApp Component
    if (
      document.content?.type === "interactive" ||
      document.content?.type === "template"
    ) {
      return (
        <WhatsAppRenderer
          document={document}
          position={position}
          editable={editable}
          deletable={deletable}
          editing={editing}
          memberInfo={memberInfo}
          externalMessage={externalMessage}
          onSave={handleSave}
          onDelete={handleDelete}
          onCancel={handleCancel}
          onEdit={handleEdit}
        />
      );
    }

    // TODO: Adicionar outros tipos de canal aqui
    // Exemplo para outros canais:
    // if (document.content?.platform === "telegram") {
    //   return <TelegramContent {...props} />;
    // }
    // if (document.content?.platform === "messenger") {
    //   return <MessengerContent {...props} />;
    // }
  }

  // Fallback - renderiza como JSON genérico se não identificar o canal
  return (
    <div className="blip-card-channel-content">
      <div className="channel-content-header">
        <span className="channel-type">Canal não identificado</span>
      </div>
      <pre className="channel-content-json">
        {JSON.stringify(document.content, null, 2)}
      </pre>
    </div>
  );
};

export default ChannelContent;
