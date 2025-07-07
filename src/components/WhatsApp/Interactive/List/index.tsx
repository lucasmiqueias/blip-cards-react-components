import React from "react";
import { BlipCardProps } from "../../../../types";
import "./style.css";
import clsx from "clsx";

interface WhatsAppListProps extends BlipCardProps {
  interactive: {
    type: "list";
    body: {
      text: string;
    };
    action: {
      button: string;
      sections: Array<{
        rows: Array<{
          id: string;
          title: string;
          description?: string;
        }>;
      }>;
    };
  };
}

const WhatsAppList: React.FC<WhatsAppListProps> = ({
  interactive,
  position,
}) => {
  const { body, action } = interactive;

  // Ícone SVG inline do WhatsApp List
  const ListIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.76953 16.1103C5.19475 16.1103 5.53998 16.4547 5.54004 16.8799C5.54004 17.3051 5.19479 17.6504 4.76953 17.6504C4.34449 17.6501 4 17.305 4 16.8799C4.00006 16.4548 4.34453 16.1106 4.76953 16.1103ZM19.3398 16.0996C19.5387 16.0996 19.7295 16.1788 19.8701 16.3193C20.0107 16.4599 20.0897 16.6508 20.0898 16.8496C20.0898 17.0484 20.0106 17.2393 19.8701 17.3799C19.7295 17.5205 19.5387 17.5996 19.3398 17.5996H8.49023C8.29132 17.5996 8.09964 17.5205 7.95898 17.3799C7.81861 17.2393 7.74023 17.0483 7.74023 16.8496C7.74034 16.6509 7.81845 16.4599 7.95898 16.3193C8.09964 16.1787 8.29132 16.0996 8.49023 16.0996H19.3398ZM4.76953 11.5498C5.19479 11.5498 5.54004 11.8951 5.54004 12.3203C5.53987 12.7454 5.19469 13.0898 4.76953 13.0898C4.34459 13.0896 4.00017 12.7453 4 12.3203C4 11.8952 4.34449 11.5501 4.76953 11.5498ZM19.3398 11.5703C19.5387 11.5703 19.7295 11.6494 19.8701 11.79C20.0106 11.9307 20.0898 12.1215 20.0898 12.3203C20.0898 12.5191 20.0107 12.71 19.8701 12.8506C19.7295 12.9911 19.5387 13.0703 19.3398 13.0703H8.49023C8.29132 13.0703 8.09964 12.9912 7.95898 12.8506C7.81846 12.71 7.74032 12.5191 7.74023 12.3203C7.74023 12.1216 7.81858 11.9307 7.95898 11.79C8.09964 11.6494 8.29132 11.5703 8.49023 11.5703H19.3398ZM4.76953 7C5.19463 7 5.53979 7.34449 5.54004 7.76953C5.54004 8.19479 5.19479 8.54004 4.76953 8.54004C4.34449 8.53978 4 8.19463 4 7.76953C4.00025 7.34464 4.34464 7.00025 4.76953 7ZM19.3398 7.01953C19.5386 7.01956 19.7295 7.09874 19.8701 7.23926C20.0107 7.3798 20.0897 7.57079 20.0898 7.76953C20.0898 7.96844 20.0108 8.16013 19.8701 8.30078C19.7295 8.44128 19.5386 8.5195 19.3398 8.51953H8.49023C8.29133 8.51953 8.09964 8.44143 7.95898 8.30078C7.81833 8.16013 7.74023 7.96844 7.74023 7.76953C7.74036 7.57079 7.81845 7.3798 7.95898 7.23926C8.09964 7.0986 8.29132 7.01953 8.49023 7.01953H19.3398Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div
      className={clsx("blip-grid", {
        "blip-grid--row": position === "left",
        "blip-grid--row-reverse": position === "right",
      })}
    >
      <div className={clsx("bubble", position)}>
        <div className="whatsapp-list-body">
          <p className="whatsapp-list-text">{body.text}</p>
        </div>

        <div className="whatsapp-list-action">
          <div className="whatsapp-list-button">
            <ListIcon />
            <span>{action.button}</span>
          </div>

          <div className="whatsapp-list-options">
            {action.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="whatsapp-list-section">
                {section.rows.map((row) => (
                  <div key={row.id} className="whatsapp-list-option">
                    <div className="whatsapp-list-option-title">
                      {row.title}
                    </div>
                    {row.description && (
                      <div className="whatsapp-list-option-description">
                        {row.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppList;
