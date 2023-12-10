// // ChessNotation.js
// // import React from "react";
// import PropTypes from "prop-types";

// function ChessNotation({ values, isVertical = true }) {
//   console.log("isVertical:", isVertical);

//   return (
//     <div className={`board-notation ${isVertical ? "vertical" : "horizontal"}`}>
//       {values.map((value) => (
//         <div className="notation" key={value}>
//           {value}
//         </div>
//       ))}
//     </div>
//   );
// }

// ChessNotation.propTypes = {
//   values: PropTypes.arrayOf(PropTypes.any).isRequired,
//   isVertical: PropTypes.bool.isRequired,
// };

// export default ChessNotation;
