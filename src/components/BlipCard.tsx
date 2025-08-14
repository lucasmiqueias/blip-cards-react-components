import React, { useEffect, useState } from "react";
import { BlipCardProps } from "../types";
import BlipCardWrapper from "./BlipCardWrapper";
import ContentRenderer from "./ContentRenderer";
import "./style.css";
import { useFormattedTime } from "../hooks/useFormattedTime";

const BlipCard: React.FC<BlipCardProps> = (props) => {
  const { position, photo, date, status, channel } = props;

  const formattedDate = useFormattedTime(date);

  console.log(date)
  console.log(formattedDate)

  const [channelValidate, setChannelValidate] = useState(() => {
    const validChannels = ["BlipChat", "WhatsApp"];
    const safeChannel = channel ?? ""; 

    return validChannels.includes(safeChannel) ? safeChannel : "BlipChat";
  });

  useEffect(() => {
    const validChannels = ["BlipChat", "WhatsApp"];
    const safeChannel = channel ?? ""; 
    if (validChannels.includes(safeChannel)) {
      setChannelValidate(safeChannel);
    } else {
      setChannelValidate("BlipChat");
    }
  }, [channel]);

  return (
    <BlipCardWrapper
      position={position}
      photo={photo}
      date={formattedDate}
      status={status}
      channel={channelValidate}
    >
      <ContentRenderer {...props} date={formattedDate} />
    </BlipCardWrapper>
  );
};

export default BlipCard;
