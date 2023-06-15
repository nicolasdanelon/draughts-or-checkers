import useCheckerStore from "../store";
import Checker from "./checker.jsx";

const Square = ({ data, action }) => {
  const { color, highlight, checkerColor, taken } = data;
  const marked = highlight ? 'possible' : '';
  const { cleanHighlighted } = useCheckerStore();

  const markAndCleanSquare = () => {
    cleanHighlighted();
    if (color === 'black' && taken) {
      return action();
    }
  }

  return (
    <div
      onClick={markAndCleanSquare}
      class={`square ${color}-square ${marked}`}
    >
      {taken ? <Checker color={checkerColor} /> : null}
    </div>
  );
}

export default Square;
