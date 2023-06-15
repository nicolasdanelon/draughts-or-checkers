import useCheckerStore from "../store";

const Square = ({ data, action }) => {
  const { color, highlight } = data;
  const marked = highlight ? 'possible' : '';
  const { cleanHighlighted } = useCheckerStore();

  const markAndCleanSquare = () => {
    cleanHighlighted();
    if (color === 'black') {
      return action();
    }
  }

  return (
    <div
      onClick={markAndCleanSquare}
      class={`square ${color}-square ${marked}`}
    >
      {"\u00A0"}
    </div>
  );
}

export default Square;
