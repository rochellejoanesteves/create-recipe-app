import React from "react";
import { useTheme } from "../../hooks/useTheme";
import "./themeSelector.scss";

const themeColors = ["#58249c", "#249c6b", "#b70233"]

const ThemeSelector = () => {
  const { changeColor } = useTheme();
  return (
  <div className="themeSelector">
    <div className="theme-button">
        {themeColors.map(color => (
            <div key={color} onClick={() => changeColor(color)} style={{
                background: color
            }} />
        ))}
    </div>
  </div>)
};

export default ThemeSelector;
