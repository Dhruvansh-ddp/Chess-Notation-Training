// import React from "react";
import "./ToggleNotationButton.css";
import PropTypes from "prop-types";

function ToggleNotationButton({ showNotation, onToggle }) {
  return (
    <button className="toggle-button" onClick={onToggle}>
      {showNotation ? "Hide Notation" : "Show Notation"}
    </button>
  );
}

ToggleNotationButton.propTypes = {
  showNotation: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ToggleNotationButton;
