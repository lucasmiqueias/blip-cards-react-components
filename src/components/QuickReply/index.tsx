import React from "react";
import "./style.css";
import { BlipCardProps, QuickReplyI } from "../../types";
import clsx from "clsx";

const QuickReply: React.FC<BlipCardProps> = (props) => {
  const { document, position } = props;

  const QuickReplyContent = document.content as QuickReplyI;

  return (
    <div
      className={clsx("blip-grid", {
        "blip-grid--row": position === "left",
        "blip-grid--row-reverse": position === "right",
      })}
    >
      <div className="quick-reply-container">
        <div className={clsx("bubble", position)}>{QuickReplyContent.text}</div>
        {QuickReplyContent.options && QuickReplyContent.options.length > 0 && (
          <div className="quick-reply-options">
            {QuickReplyContent.options
              .sort((a, b) => (a.order || 0) - (b.order || 0))
              .map((option, index) => (
                <div key={index} className={"quick-reply-option__item"}>
                  {option.text}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickReply;
