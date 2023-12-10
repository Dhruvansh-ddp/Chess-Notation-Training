// import { useEffect, useState, useCallback } from "react";
// import PropTypes from "prop-types";
// import BoardSquare from "./BoardSquare";
// import "./ChessBoard.css";

// function ChessBoard({ showNotation, timerDuration }) {
//   const [targetSquare, setTargetSquare] = useState("");
//   const [countdown, setCountdown] = useState(timerDuration);

//   // for start button
//   const [isGameActive, setIsGameActive] = useState(false);
//   const [score, setScore] = useState(0);
//   const [attempts, setAttempts] = useState(0);

//   // useEffect(() => {
//   //   let timerId;
//   //   if (countdown > 0 && isGameActive) {
//   //     timerId = setTimeout(() => {
//   //       setCountdown(countdown - 1);
//   //     }, 1000);
//   //   } else if (countdown === 0 && isGameActive) {
//   //     setIsGameActive(false); // Stop the game if countdown reaches zero
//   //   }
//   //   return () => clearTimeout(timerId);
//   // }, [countdown, isGameActive]);

//   const startGame = () => {
//     if (!isGameActive) {
//       setIsGameActive(true);
//       setCountdown(timerDuration);
//       setScore(0);
//       setAttempts(0);
//       generateRandomSquare();
//     }
//   };

//   const stopGame = () => {
//     setIsGameActive(false);
//   };

//   const generateRandomSquare = useCallback(() => {
//     if (isGameActive) {
//       // Only generate a new square if the game is active
//       const rows = "87654321";
//       const cols = "abcdefgh";
//       const randomRow = rows[Math.floor(Math.random() * rows.length)];
//       const randomCol = cols[Math.floor(Math.random() * cols.length)];
//       setTargetSquare(`${randomCol}${randomRow}`);
//       setCountdown(timerDuration); // Reset the countdown
//     }
//   }, [timerDuration, isGameActive]); // Adding isGameActive to the dependencies array

//   // useEffect(() => {
//   //   generateRandomSquare();
//   // }, [generateRandomSquare]);

//   // useEffect(() => {
//   //   // Set a timeout only if the countdown is greater than 0
//   //   if (countdown > 0) {
//   //     const timerId = setTimeout(() => {
//   //       setCountdown(countdown - 1);
//   //     }, 1000);
//   //     return () => clearTimeout(timerId); // Cleanup to clear the timeout
//   //   }

//   //   // If countdown reached 0, generate a new random square
//   //   if (countdown === 0) {
//   //     generateRandomSquare();
//   //   }
//   // }, [countdown, generateRandomSquare]); // Include the memoized generateRandomSquare function

//   // combined the both upper commented
//   useEffect(() => {
//     let timerId;

//     if (countdown > 0 && isGameActive) {
//       // Set a timeout to decrement countdown
//       timerId = setTimeout(() => {
//         setCountdown(countdown - 1);
//       }, 1000);
//     } else if (countdown === 0 && isGameActive) {
//       // If countdown reaches zero, generate a new random square
//       generateRandomSquare();
//     } else if (countdown === 0) {
//       // If countdown reaches zero and the game is not active, stop the game
//       setIsGameActive(false);
//     }
//     // Cleanup to clear the timeout
//     return () => clearTimeout(timerId);
//   }, [countdown, isGameActive, generateRandomSquare]);

//   const handleSquareClick = (notation) => {
//     if (isGameActive && notation === targetSquare) {
//       setScore((prevScore) => prevScore + 1);
//       generateRandomSquare();
//     }
//     if (isGameActive) {
//       setAttempts((prevAttempts) => prevAttempts + 1);
//     }
//   };

//   //  8x8 board squares
//   const boardSquares = Array.from({ length: 64 }).map((_, index) => {
//     const row = Math.floor(index / 8);
//     const col = index % 8;
//     const isLightSquare = (row + col) % 2 === 0;
//     const notation = `${"abcdefgh"[col]}${"87654321"[row]}`;
//     return (
//       <BoardSquare
//         key={notation}
//         notation={showNotation ? notation : ""}
//         isLightSquare={isLightSquare}
//         onClick={() => handleSquareClick(notation)}
//       />
//     );
//   });

//   return (
//     <div className="chessboard-wrapper">
//       {showNotation && (
//         <div className="board-notation horizontal-notation top">
//           <div className="corner"></div>
//           {"abcdefgh".split("").map((col) => (
//             <div className="notation" key={col}>
//               {col}
//             </div>
//           ))}
//           <div className="corner"></div>
//         </div>
//       )}
//       <div className="board-middle">
//         {showNotation && (
//           <div className="board-notation vertical-notation left">
//             {"87654321".split("").map((row) => (
//               <div className="notation" key={row}>
//                 {row}
//               </div>
//             ))}
//           </div>
//         )}
//         <div className="chess-board">{boardSquares}</div>
//         {showNotation && (
//           <div className="board-notation vertical-notation right">
//             {"87654321".split("").map((row) => (
//               <div className="notation" key={row}>
//                 {row}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       {showNotation && (
//         <div className="board-notation horizontal-notation bottom">
//           <div className="corner"></div>
//           {"abcdefgh".split("").map((col) => (
//             <div className="notation" key={col}>
//               {col}
//             </div>
//           ))}
//           <div className="corner"></div>
//         </div>
//       )}

//       {/* <div className="countdown">Time remaining: {countdown}s</div> */}
//       <div className="target-square">Click on: {targetSquare}</div>

//       <button onClick={startGame} disabled={isGameActive}>
//         Start
//       </button>
//       <button onClick={stopGame} disabled={!isGameActive}>
//         Stop
//       </button>

//       {isGameActive && (
//         <div className="countdown">Time remaining: {countdown}s</div>
//       )}
//       <div>
//         Score: {score}/{attempts}
//       </div>
//     </div>
//   );
// }

// ChessBoard.propTypes = {
//   showNotation: PropTypes.bool.isRequired,
//   timerDuration: PropTypes.number.isRequired,
// };

// export default ChessBoard;

import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import BoardSquare from "./BoardSquare";
import "./ChessBoard.css";

function ChessBoard({ showNotation, timerDuration }) {
  const [targetSquare, setTargetSquare] = useState("");
  const [countdown, setCountdown] = useState(timerDuration);

  // for start button
  const [isGameActive, setIsGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const startGame = () => {
    if (!isGameActive) {
      setIsGameActive(true);
      setScore(0);
      setAttempts(0);
      generateRandomSquare();
      setCountdown(timerDuration);
    }
  };

  const stopGame = () => {
    setIsGameActive(false);
  };

  // const generateRandomSquare = useCallback(() => {
  //   if (isGameActive) {
  //     const rows = "87654321";
  //     const cols = "abcdefgh";
  //     const randomRow = rows[Math.floor(Math.random() * rows.length)];
  //     const randomCol = cols[Math.floor(Math.random() * cols.length)];
  //     setTargetSquare(`${randomCol}${randomRow}`);
  //   }
  // }, [isGameActive]); // Remove timerDuration from the dependencies array

  const generateRandomSquare = useCallback(() => {
    const rows = "87654321";
    const cols = "abcdefgh";
    const randomRow = rows[Math.floor(Math.random() * rows.length)];
    const randomCol = cols[Math.floor(Math.random() * cols.length)];
    setTargetSquare(`${randomCol}${randomRow}`);
  }, []); // No dependencies needed here

  // useEffect(() => {
  //   let timerId;

  //   if (countdown > 0 && isGameActive) {
  //     timerId = setTimeout(() => {
  //       setCountdown(countdown - 1);
  //     }, 1000);
  //   } else if (countdown === 0 && isGameActive) {
  //     setAttempts((prevAttempts) => prevAttempts + 1); // Increase attempts
  //     generateRandomSquare();
  //   } else if (countdown === 0) {
  //     setIsGameActive(false);
  //   }

  //   return () => clearTimeout(timerId);
  // }, [countdown, isGameActive, generateRandomSquare]);

  useEffect(() => {
    let timerId;

    if (countdown > 0 && isGameActive) {
      timerId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0 && isGameActive) {
      generateRandomSquare(); // Generate a new square for the next attempt
      setCountdown(timerDuration); // Reset the countdown for the new attempt
      setAttempts((prevAttempts) => prevAttempts + 1); // Increase attempts
    }

    return () => clearInterval(timerId);
  }, [countdown, isGameActive, generateRandomSquare, timerDuration]);

  // useEffect(() => {
  //   let timerId;

  //   if (countdown > 0 && isGameActive) {
  //     timerId = setTimeout(() => {
  //       setCountdown(countdown - 1);
  //     }, 1000);
  //   } else if (countdown === 0 && isGameActive) {
  //     generateRandomSquare(); // Generate a new square for the next attempt
  //     setCountdown(timerDuration); // Reset the countdown for the new attempt
  //     setAttempts((prevAttempts) => prevAttempts + 1); // Increase attempts
  //   }

  //   return () => clearTimeout(timerId);
  // }, [countdown, isGameActive, generateRandomSquare, timerDuration]);

  const handleSquareClick = (notation) => {
    if (isGameActive && notation === targetSquare) {
      setScore((prevScore) => prevScore + 1);
      generateRandomSquare();
    }
    if (isGameActive) {
      setAttempts((prevAttempts) => prevAttempts + 1);
    }
  };

  const boardSquares = Array.from({ length: 64 }).map((_, index) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    const isLightSquare = (row + col) % 2 === 0;
    const notation = `${"abcdefgh"[col]}${"87654321"[row]}`;
    return (
      <BoardSquare
        key={notation}
        notation={showNotation ? notation : ""}
        isLightSquare={isLightSquare}
        onClick={() => handleSquareClick(notation)}
      />
    );
  });

  return (
    <div className="chessboard-wrapper">
      {showNotation && (
        <div className="board-notation horizontal-notation top">
          <div className="corner"></div>
          {"abcdefgh".split("").map((col) => (
            <div className="notation" key={col}>
              {col}
            </div>
          ))}
          <div className="corner"></div>
        </div>
      )}
      <div className="board-middle">
        {showNotation && (
          <div className="board-notation vertical-notation left">
            {"87654321".split("").map((row) => (
              <div className="notation" key={row}>
                {row}
              </div>
            ))}
          </div>
        )}
        <div className="chess-board">{boardSquares}</div>
        {showNotation && (
          <div className="board-notation vertical-notation right">
            {"87654321".split("").map((row) => (
              <div className="notation" key={row}>
                {row}
              </div>
            ))}
          </div>
        )}
      </div>
      {showNotation && (
        <div className="board-notation horizontal-notation bottom">
          <div className="corner"></div>
          {"abcdefgh".split("").map((col) => (
            <div className="notation" key={col}>
              {col}
            </div>
          ))}
          <div className="corner"></div>
        </div>
      )}

      <div className="target-square">Click on: {targetSquare}</div>
      <button onClick={startGame} disabled={isGameActive}>
        Start
      </button>
      <button onClick={stopGame} disabled={!isGameActive}>
        Stop
      </button>
      {isGameActive && (
        <div className="countdown">Time remaining: {countdown}s</div>
      )}
      <div>
        Score: {score}/{attempts}
      </div>
    </div>
  );
}

ChessBoard.propTypes = {
  showNotation: PropTypes.bool.isRequired,
  timerDuration: PropTypes.number.isRequired,
};

export default ChessBoard;
