import Square from "./square.jsx";
import useCheckerStore from "../stores/store.js";

const GameBoard = () => {
  const { gameBoard } = useCheckerStore();

  return (
    <div className="game-board">
      {gameBoard.map((row, i) => {
        return row.map((col, j) => {
          return (
            <Square
              key={`square-${i}_${j}`}
              data={gameBoard[i][j]}
              x={i}
              y={j}
            />
          );
        })
      })}
    </div>
  );
}

export default GameBoard;
