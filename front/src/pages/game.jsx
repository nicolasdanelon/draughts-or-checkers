import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'preact/compat';
import GameBoard from '../components/gameboard.jsx';
import { useAxios } from '../components/request-context';

const Game = () => {
  const { id } = useParams();
  const axios = useAxios();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    if (!id) return;

    ; (async () => {
      try {
        const { data } = await axios.get(`/board/${id}`);
        console.log(data);
        setMatch(data); // WIP, save to store
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <GameBoard />
    </>
  )
}

export default Game;
