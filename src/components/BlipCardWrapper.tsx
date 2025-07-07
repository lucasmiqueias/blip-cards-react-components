import React from "react";
import clsx from "clsx";

interface BlipCardWrapperProps {
  position: "left" | "right";
  photo?: string;
  date?: string;
  status?: "sending" | "sent" | "received" | "failed";
  children: React.ReactNode;
}

const BlipCardWrapper: React.FC<BlipCardWrapperProps> = ({
  position,
  photo,
  date,
  status,
  children,
}) => {
  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "sending":
        return "⏳";
      case "sent":
        return "✓";
      case "received":
        return "✓✓";
      case "failed":
        return "⚠️";
      default:
        return "";
    }
  };

  return (
    <div className="blip-card-item">
      {photo && position === "left" && (
        <img
          className={clsx("blip-card-item__photo", position)}
          src={photo}
          alt="Avatar"
        />
      )}
      <div className={clsx("blip-card-item__content")}>{children}</div>
      {date && (
        <div className={clsx("blip-card-item__date", position)}>
          {date} {getStatusIcon(status)}
        </div>
      )}
    </div>
  );
};

export default BlipCardWrapper;
