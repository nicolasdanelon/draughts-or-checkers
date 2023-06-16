import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'preact/compat';
import GameBoard from '../components/gameboard.jsx';
import { useAxios } from '../components/request-context.jsx';

const Game = () => {
  const { id } = useParams();
  const axios = useAxios();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    if (!id) return;

    ; (async () => {
    })();
  }, []);

  return (
    <>
      <GameBoard />
    </>
  )
}

export default Game;
