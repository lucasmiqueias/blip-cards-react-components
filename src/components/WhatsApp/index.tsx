import React from "react";
import { BlipCardProps, BlipDocument } from "../../types";
import "./style.css";

// Componentes específicos para cada tipo
import WhatsAppList from "./Interactive/List";

const WhatsAppRenderer: React.FC<BlipCardProps> = (props) => {
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

  // Interactive content
  if (document.content?.type === "interactive") {
    const interactive = document.content.interactive;

    // List interactive
    if (interactive?.type === "list") {
      return (
        <WhatsAppList
          interactive={interactive}
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

    // TODO: Adicionar outros tipos de interactive aqui
    // if (interactive?.type === "button") {
    //   return <WhatsAppButton interactive={interactive} {...props} />;
    // }
    //
    // if (interactive?.type === "cta_url") {
    //   return <WhatsAppCTA interactive={interactive} {...props} />;
    // }
  }

  // Template content
  if (document.content?.type === "template") {
    // TODO: Implementar componentes de template
    return (
      <div className="blip-card-whatsapp-content">
        <div className="whatsapp-content-header">
          <span className="whatsapp-indicator">📱 WhatsApp Template</span>
        </div>
        <div className="whatsapp-content-body">
          <pre className="whatsapp-json">
            {JSON.stringify(document.content, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  // Fallback para tipos não suportados do WhatsApp
  return (
    <div className="blip-card-whatsapp-content">
      <div className="whatsapp-content-header">
        <span className="whatsapp-indicator">📱 WhatsApp (Não suportado)</span>
      </div>
      <div className="whatsapp-content-body">
        <pre className="whatsapp-json">
          {JSON.stringify(document.content, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default WhatsAppRenderer;
