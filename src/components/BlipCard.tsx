import React from "react";
import { BlipCardProps } from "../types";
import BlipCardWrapper from "./BlipCardWrapper";
import ContentRenderer from "./ContentRenderer";
import "./style.css";

const BlipCard: React.FC<BlipCardProps> = (props) => {
  const { position, photo, date, status } = props;

  return (
    <BlipCardWrapper
      position={position}
      photo={photo}
      date={date}
      status={status}
    >
      <ContentRenderer {...props} />
    </BlipCardWrapper>
  );
};

export default BlipCard;
