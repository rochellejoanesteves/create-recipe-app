import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { CgDarkMode } from "react-icons/cg";
import "./themeSelector.scss";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="themeSelector">
      <div className="mode-toggle">
        <CgDarkMode
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-button">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{
              background: color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
