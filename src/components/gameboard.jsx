import Square from './square';
import useCheckerStore, { directions } from '../store'

const GameBoard = () => {
  const { gameBoard, checkCell } = useCheckerStore();

  return (
    <div class="wrapper-board">
      {gameBoard.map((row, i) => {
        return row.map((col, j) => {
          const color = gameBoard[i][j].color;

          return (
            <Square
              key={`square-${i}_${j}`}
              data={gameBoard[i][j]}
              action={() => {
                Object.values(directions).forEach((direction) => {
                  checkCell(i, j, direction, color);
                })
              }}
            />
          );
        })
      })}
    </div>
  )
}

export default GameBoard;
