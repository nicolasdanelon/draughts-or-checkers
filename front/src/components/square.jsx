import { useParams } from 'react-router-dom';
import Checker from "./checker.jsx";
import useCheckerStore from "../stores/store.js";
import { useAxios } from './request-context';

const Square = ({ data, x, y }) => {
  const { color, highlight, checkerColor, taken } = data;
  const marked = highlight ? 'possible' : '';
  const { moveOrHighlight } = useCheckerStore();
  const axios = useAxios();
  const { id } = useParams();

  const updateMovement = async () => {
    if (!id) return;

    try {
      const { data } = await axios.post("/play/");
    } catch (e) {
      console.log(e);
    }
  }

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
