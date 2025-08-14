import React from "react";
import clsx from "clsx";
import { DeletedContentProps } from "../types";

const DeletedContent: React.FC<DeletedContentProps> = ({
  position,
  externalMessage,
  externalMessageText = "External message",
  messageDeleted = "This message was deleted",
}) => {
  
  return (
    <div className="blip-card-container">
      <div className="blip-card blip-deleted-content">
        {externalMessage && (
          <div className="blip-external-message">{externalMessageText}</div>
        )}

        <div className={clsx("bubble", position)}>{messageDeleted}</div>
      </div>
    </div>
  );
};

export default DeletedContent;
