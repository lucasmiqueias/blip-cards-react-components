import React from "react";
import { BlipCardProps, ReplyI } from "../../types";
import clsx from "clsx";
import "./style.css";

const Reply: React.FC<BlipCardProps> = (props) => {
  const { document, position } = props;

  const replyContent = document.content as ReplyI;

  if (!replyContent || !replyContent.replied || !replyContent.inReplyTo) {
    return null;
  }

  const { replied, inReplyTo } = replyContent;

  const renderInReplyToContent = () => {
    switch (inReplyTo.type) {
      case "text/plain":
        return (
          <>
            {typeof inReplyTo.value === "string"
              ? inReplyTo.value
              : inReplyTo.value?.text || ""}
          </>
        );
      default:
        return (
          <div className="reply-original-other">
            <span className="reply-media-icon">📄</span>
            <span className="reply-media-text">
              {inReplyTo.type.split("/").pop() || "File"}
            </span>
          </div>
        );
    }
  };

  const renderRepliedContent = () => {
    // For now, we support text/plain replies
    if (replied.type === "text/plain") {
      return <>{replied.value}</>;
    }

    // Fallback for other types
    return (
      <div className={clsx("bubble", position)}>
        <div dangerouslySetInnerHTML={{ __html: replied.value }} />
      </div>
    );
  };

  return (
    <div
      className={clsx("blip-grid", {
        "blip-grid--row": position === "left",
        "blip-grid--row-reverse": position === "right",
      })}
    >
      <div className={clsx("bubble", position)}>
        <div className={clsx("bubble-reply", "bubble-reply-text", position)}>
          {renderInReplyToContent()}
        </div>
        <div className="reply-content">{renderRepliedContent()}</div>
      </div>
    </div>
  );
};

export default Reply;
