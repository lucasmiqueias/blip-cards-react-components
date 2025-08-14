import React, { useState } from "react";
import "./ThemeToggle.css";

interface ChannelToggleProps {
  className?: string;
  onSelectChannel: (channelName: string) => void;
}

export const ChannelToggle: React.FC<ChannelToggleProps> = ({
  className = "",
  onSelectChannel
}) => {
  const [selectedChannel, setSelectedChannel] = useState("BlipChat");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedChannel(value);
    onSelectChannel(value); 
  };

  return (
    <div className={`theme-toggle ${className}`}>
      <div className="theme-toggle__options">
        <label className="theme-toggle__option">
          <input
            type="radio"
            name="theme"
            value="WhatsApp"
            className="theme-toggle__input"
            checked={selectedChannel === "WhatsApp"}
            onChange={handleChange}
          />
          <span className="theme-toggle__label">WhatsApp</span>
        </label>
        <label className="theme-toggle__option">
          <input
            type="radio"
            name="theme"
            value="BlipChat"
            className="theme-toggle__input"
            checked={selectedChannel === "BlipChat"}
            onChange={handleChange}
          />
          <span className="theme-toggle__label">BlipChat</span>
        </label>
      </div>
    </div>
  );
};

export default ChannelToggle;
