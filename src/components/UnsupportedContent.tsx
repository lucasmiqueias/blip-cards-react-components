import React from "react";
import clsx from "clsx";

interface UnsupportedContentProps {
  position: "left" | "right";
  externalMessage?: boolean;
  externalMessageText?: string;
  contentType: string;
}

const UnsupportedContent: React.FC<UnsupportedContentProps> = ({
  position,
}) => {
  return <div className={clsx("bubble", position)}>Unsupported content</div>;
};

export default UnsupportedContent;
