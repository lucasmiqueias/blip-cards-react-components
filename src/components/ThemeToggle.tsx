import React from "react";
import { useTheme, type Theme } from "@lucasmiqueias/blip-tokens";
import "./ThemeToggle.css";

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  showLabels = false,
  size = "md",
}) => {
  const { theme, effectiveTheme, setTheme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: "theme-toggle__icon--sm",
    md: "theme-toggle__icon--md",
    lg: "theme-toggle__icon--lg",
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`theme-toggle ${className}`}>
      {showLabels ? (
        <div className="theme-toggle__options">
          <label className="theme-toggle__option">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={() => handleThemeChange("light")}
              className="theme-toggle__input"
            />
            <span
              className={`theme-toggle__icon ${
                theme === "light" ? "theme-toggle__icon--active" : ""
              }`}
            >
              <LightIcon className={sizeClasses[size]} />
            </span>
            {showLabels && <span className="theme-toggle__label">Light</span>}
          </label>

          <label className="theme-toggle__option">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={() => handleThemeChange("dark")}
              className="theme-toggle__input"
            />
            <span
              className={`theme-toggle__icon ${
                theme === "dark" ? "theme-toggle__icon--active" : ""
              }`}
            >
              <DarkIcon className={sizeClasses[size]} />
            </span>
            {showLabels && <span className="theme-toggle__label">Dark</span>}
          </label>

          <label className="theme-toggle__option">
            <input
              type="radio"
              name="theme"
              value="auto"
              checked={theme === "auto"}
              onChange={() => handleThemeChange("auto")}
              className="theme-toggle__input"
            />
            <span
              className={`theme-toggle__icon ${
                theme === "auto" ? "theme-toggle__icon--active" : ""
              }`}
            >
              <AutoIcon className={sizeClasses[size]} />
            </span>
            {showLabels && <span className="theme-toggle__label">Auto</span>}
          </label>
        </div>
      ) : (
        <button
          onClick={toggleTheme}
          className="theme-toggle__button"
          title={`Switch to ${
            effectiveTheme === "light" ? "dark" : "light"
          } mode`}
          aria-label={`Switch to ${
            effectiveTheme === "light" ? "dark" : "light"
          } mode`}
        >
          {effectiveTheme === "light" ? (
            <DarkIcon className={sizeClasses[size]} />
          ) : (
            <LightIcon className={sizeClasses[size]} />
          )}
        </button>
      )}
    </div>
  );
};

// Icon components
const LightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>
);

const DarkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
      clipRule="evenodd"
    />
  </svg>
);

const AutoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.25 16.22a6.937 6.937 0 01-9.47-9.47 7.451 7.451 0 1010.93 10.93.75.75 0 00-.46-.46z" />
    <path d="M12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7z" />
  </svg>
);

export default ThemeToggle;
