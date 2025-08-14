import React, { useState, useEffect } from "react";
import { PlainTextProps, BlipDocument } from "../../types";
import clsx from "clsx";
import "./style.css";
import { useStatusIcon } from "../../hooks/useStatusIcon";
import { usePreviewDocument } from "../../hooks/usePreviewText";

const PlainText: React.FC<PlainTextProps> = ({
  document,
  position,
  editable = false,
  deletable = false,
  editing = false,
  memberInfo,
  fullDocument,
  showMoreText = "Show more",
  channel,
  date,
  status,
  onSave,
  onDelete,
  onCancel,
  onEdit,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [isEditing, setIsEditing] = useState(editing);
  const [channelState, setChannelState] = useState(channel);
  const statusIcon = useStatusIcon(status);
  const previewDocument = usePreviewDocument(document, channelState);

  const handleEdit = () => {
    setIsEditing(true);
    onEdit?.();
  };

  const handleDelete = () => {
    if (fullDocument) {
      onDelete?.(fullDocument);
    }
  };

  if (isEditing) {
    // TODO: Implement editing component
    return (
      <div className="blip-card-editing">
        <textarea
          defaultValue={previewDocument.content}
          onBlur={(e) => {
            if (fullDocument) {
              const newDoc: BlipDocument = {
                ...fullDocument,
                content: e.target.value,
              };
              onSave?.(newDoc);
            }
            setIsEditing(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsEditing(false);
              onCancel?.();
            }
          }}
          autoFocus
        />
      </div>
    );
  }

  if (!previewDocument.content || previewDocument.content.length === 0) {
    return null;
  }

  useEffect(() => {
    setChannelState(channel);
  }, [channel]);

  return (
    <>
      {memberInfo && channelState?.toLowerCase() !== "whatsapp" && (
        <div className={clsx("blip-grid", {
          "blip-grid--row": position === "left",
          "blip-grid--row-reverse": position === "right",
        })}>
          {memberInfo.name}
        </div>
      )}
      <div
        className={clsx("blip-grid", {
          "blip-grid--row": position === "left",
          "blip-grid--row-reverse": position === "right",
          "whatsapp": channelState?.toLowerCase() === "whatsapp",
        })}
      >
        {channelState?.toLowerCase() === "whatsapp" && (
          <div className={clsx("blip-tail-in", position)}>
            <WhatsAppBubbleIcon position={position} />
          </div>
        )}
        <div className={clsx("bubble", position, channelState?.toLowerCase())}>
          {deletable && (
            <button
              className="blip-button-icon blip-button-icon--delete icon-button-margin icon-button-top"
              onClick={handleDelete}
              title="Delete"
            >
              🗑️
            </button>
          )}

          {editable && (
            <button
              className="blip-button-icon blip-button-icon--primary icon-button-margin icon-button-top"
              onClick={handleEdit}
              title="Edit"
            >
              ✏️
            </button>
          )}

          {!previewDocument.hasPreview ? (
            <>
              <div className={clsx("blip-card-item__message", position, channelState?.toLowerCase())}>
                <span
                  className="blip-card-item__message-text"
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={{ __html: previewDocument.content }}
                />
                {channelState?.toLowerCase() === "whatsapp" && (
                  <span>
                    <span className="blip-card-item__date hidden">
                      {date} {position === "right" && statusIcon}
                    </span>
                  </span>
                )}
              </div>
              {channelState?.toLowerCase() === "whatsapp" && (
                <span>
                  <span className={clsx("blip-card-item__date whatsapp", position)}>
                    {date} {position === "right" && statusIcon}
                  </span>
                </span>
              )}
            </>
          ) : (
            <>
              <div className={clsx("blip-card-item__message", position, channelState?.toLowerCase())}>
                <span
                  className="blip-card-item__message-text"
                  style={{ display: showContent ? "none" : "inline" }}
                  dangerouslySetInnerHTML={{
                    __html: previewDocument.previewContent,
                  }}
                />

                {showContent && (
                  <div
                    className="slide-fade-enter-active"
                    dangerouslySetInnerHTML={{ __html: previewDocument.content }}
                  />
                )}

                {!showContent && (
                  <span
                    className="blip-show-more"
                    onClick={() => setShowContent(true)}
                  >
                    {showMoreText}
                  </span>
                )}
              </div>
              {channelState?.toLowerCase() === "whatsapp" && (
                <span>
                  <span className={clsx("blip-card-item__date whatsapp", position)}>
                    {date} {position === "right" && statusIcon}
                  </span>
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const WhatsAppBubbleIcon: React.FC<{ className?: string, position: "left" | "right" }> = ({ className, position }) => {

  return(
    <>
      {position == "left" ? (
        <>
          <svg
            viewBox="0 0 8 13"
            height="13"
            width="8"
            preserveAspectRatio="xMidYMid meet"
            className={className}
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 8 13"
          >
            <path
              opacity="0.13"
              fill="#0000000"
              d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
            ></path>
            <path
              fill="currentColor"
              d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
            ></path>
          </svg>
        </>
      ) : (
        <>
          <svg
            viewBox="0 0 8 13"
            height="13"
            width="8"
            preserveAspectRatio="xMidYMid meet"
            className={className}
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 8 13"
          >
            <title>tail-out</title>
            <path
              opacity="0.13"
              d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
            ></path>
            <path
              fill="currentColor"
              d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
            ></path>
          </svg>
        </>
      )}
    </>
  )
}

export default PlainText;
