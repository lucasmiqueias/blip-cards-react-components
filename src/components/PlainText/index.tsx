import React, { useState, useMemo } from "react";
import { PlainTextProps, BlipDocument } from "../../types";
import clsx from "clsx";
import "./style.css";

const PlainText: React.FC<PlainTextProps> = ({
  document,
  position,
  editable = false,
  deletable = false,
  editing = false,
  memberInfo,
  fullDocument,
  showMoreText = "Show more",
  onSave,
  onDelete,
  onCancel,
  onEdit,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [isEditing, setIsEditing] = useState(editing);

  const previewDocument = useMemo(() => {
    const content =
      typeof document === "string" ? document : document.content || "";
    const hasPreview = content.length > 200;

    return {
      content,
      previewContent: hasPreview ? content.substring(0, 200) + "..." : content,
      hasPreview,
    };
  }, [document]);

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

  return (
    <>
      {memberInfo && <div className="blip-member-info">{memberInfo.name}</div>}
      <div
        className={clsx("blip-grid", {
          "blip-grid--row": position === "left",
          "blip-grid--row-reverse": position === "right",
        })}
      >
        <div className={clsx("bubble", position)}>
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
            <div
              style={{ display: "inline" }}
              dangerouslySetInnerHTML={{ __html: previewDocument.content }}
            />
          ) : (
            <div>
              <div
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
          )}
        </div>
      </div>
    </>
  );
};

export default PlainText;
