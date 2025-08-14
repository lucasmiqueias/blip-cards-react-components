import React from "react";
import clsx from "clsx";
import { useStatusIcon } from "../hooks/useStatusIcon";

interface BlipCardWrapperProps {
  position: "left" | "right";
  photo?: string;
  date?: string;
  status?: "sending" | "sent" | "received" | "failed";
  channel: string;
  children: React.ReactNode;
}

const BlipCardWrapper: React.FC<BlipCardWrapperProps> = ({
  position,
  photo,
  date,
  status,
  children,
  channel,
}) => {
  const statusIcon = useStatusIcon(status);


  const showPhoto = photo && position === "left" && channel === "BlipChat";


  return (
    <div className={clsx("blip-card-item", channel.toLowerCase())}>
      {showPhoto && (
        <img
          className={clsx("blip-card-item__photo", position)}
          src={photo}
          alt="Avatar"
        />
      )}
      <div className={clsx("blip-card-item__content")}>
        {children}
      </div>
      {date && channel.toLowerCase() !== "whatsapp" && (
        <div className={clsx("blip-card-item__date blip-grid", {
          "blip-grid--row": position === "left",
          "blip-grid--row-reverse": position === "right",
        })}>
          {date} {statusIcon}
        </div>
      )}
    </div>
  );
};

export default BlipCardWrapper;
