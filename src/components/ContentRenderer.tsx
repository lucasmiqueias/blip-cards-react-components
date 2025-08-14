import React from "react";
import { BlipCardProps, BlipDocument } from "../types";

// Componentes específicos para cada tipo
import PlainText from "./PlainText/index.tsx";
import DeletedContent from "./DeletedContent";
import UnsupportedContent from "./UnsupportedContent";
import Reply from "./Reply";
import ChannelContent from "./ChannelContent";
import QuickReply from "./QuickReply";

// Factory para renderizar o conteúdo correto baseado no tipo
const ContentRenderer: React.FC<BlipCardProps> = (props) => {
  const {
    document,
    position,
    editable = false,
    deletable = false,
    memberInfo,
    editing = false,
    externalMessage = false,
    translations = {},
    channel,
    date,
    status,
    onSave,
    onDelete,
    onCancel,
    onEdit,
  } = props;

  const {
    externalMessageText = "External message",
    messageDeleted = "This message was deleted",
    showMoreText = "Show more",
  } = translations;

  // Handlers
  const handleSave = (newDocument: BlipDocument) => onSave?.(newDocument);
  const handleDelete = (documentToDelete: BlipDocument) =>
    onDelete?.(documentToDelete);
  const handleEdit = () => onEdit?.();
  const handleCancel = () => onCancel?.();

  // Deleted content
  if (document.type === "application/vnd.lime.deleted-content+json") {
    return (
      <DeletedContent
        position={position}
        externalMessage={externalMessage}
        externalMessageText={externalMessageText}
        messageDeleted={messageDeleted}
        channel={channel}
      />
    );
  }

  // Reply content
  if (document.type === "application/vnd.lime.reply+json") {
    return (
      <Reply
        document={document}
        position={position}
        editable={editable}
        deletable={deletable}
        editing={editing}
        memberInfo={memberInfo}
        onSave={handleSave}
        onDelete={handleDelete}
        onCancel={handleCancel}
        onEdit={handleEdit}
      />
    );
  }

  // Channel content (WhatsApp, Telegram, etc.)
  if (document.type === "application/json") {
    return (
      <ChannelContent
        document={document}
        position={position}
        editable={editable}
        deletable={deletable}
        editing={editing}
        memberInfo={memberInfo}
        externalMessage={externalMessage}
        translations={translations}
        onSave={handleSave}
        onDelete={handleDelete}
        onCancel={handleCancel}
        onEdit={handleEdit}
      />
    );
  }

  // Plain text content
  if (document.type === "text/plain" || typeof document.content === "string") {
    return (
      <PlainText
        document={document.content || document}
        position={position}
        editable={editable}
        deletable={deletable}
        editing={editing}
        memberInfo={memberInfo}
        fullDocument={document}
        channel={channel}
        date={date}
        status={status}
        externalMessage={externalMessage}
        showMoreText={showMoreText}
        onSave={handleSave}
        onDelete={handleDelete}
        onCancel={handleCancel}
        onEdit={handleEdit}
      />
    );
  }

  // QuickReply
  if (document.type === "application/vnd.lime.select+json") {
    return (
      <QuickReply
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

  // Fallback para tipos não suportados
  return (
    <UnsupportedContent
      position={position}
      externalMessage={externalMessage}
      externalMessageText={externalMessageText}
      contentType={document.type}
    />
  );
};

export default ContentRenderer;
