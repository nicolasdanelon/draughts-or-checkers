import Checker from "./checker.jsx";
import { directions } from "../utils/game-helpers.js";
import useCheckerStore from "../stores/store.js";

const Square = ({ data, x, y }) => {
  const { color, highlight, checkerColor, taken } = data;
  const marked = highlight ? 'possible' : '';
  const { moveChecker, selectedSquare, checkCell, cleanHighlighted, setSelectedSquare } = useCheckerStore();

  const onClick = () => {
    if (x !== selectedSquare[0] && y !== selectedSquare[1] && highlight === true) {
      moveChecker(selectedSquare[0], selectedSquare[1], x, y);
      setSelectedSquare(null, null);
      cleanHighlighted();
    } else if (color === 'black' && taken) {
      setSelectedSquare(x, y);
      Object.values(directions).forEach((direction) => {
        checkCell(x, y, direction, color);
      })
      return;
    }
    cleanHighlighted();
  }

  return (
    <div
      onClick={onClick}
      class={`square ${color}-square ${marked}`}
    >
      {taken ? <Checker color={checkerColor} /> : null}
    </div>
  );
}

export default Square;
