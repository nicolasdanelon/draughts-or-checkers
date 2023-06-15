import { useEffect } from 'preact/compat';
import GameBoard from './components/gameboard';
import useCheckerStore from './store';

export function App() {
  const { initializeGameBoard } = useCheckerStore();

  useEffect(() => {
    initializeGameBoard();
  }, []);

  return (
    <GameBoard />
  );
}
