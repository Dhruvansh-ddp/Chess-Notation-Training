// BoardSquare.js
import PropTypes from "prop-types";
import "./BoardSquare.css";

function BoardSquare({ notation, isLightSquare, onClick }) {
  const squareClass = `board-square ${
    isLightSquare ? "light-square" : "dark-square"
  }`;

  return (
    <div className={squareClass} onClick={onClick}>
      {/* ... */}
    </div>
  );
}

BoardSquare.propTypes = {
  notation: PropTypes.string,
  isLightSquare: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

BoardSquare.defaultProps = {
  notation: "",
  onClick: () => {},
};

export default BoardSquare;
