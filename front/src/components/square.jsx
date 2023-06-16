import Checker from "./checker.jsx";
import useCheckerStore from "../stores/store.js";

const Square = ({ data, x, y }) => {
  const { color, highlight, checkerColor, taken } = data;
  const marked = highlight ? 'possible' : '';
  const { moveOrHighlight } = useCheckerStore();

  return (
    <div
      onClick={() => moveOrHighlight(x, y, color, taken, highlight)}
      class={`square ${color}-square ${marked}`}
    >
      {taken ? <Checker color={checkerColor} /> : null}
    </div>
  );
}

export default Square;
