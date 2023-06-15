import { useEffect } from 'preact/compat';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home';
import GameBoard from './components/gameboard';
import Layout from "./components/layout.jsx";
import useCheckerStore from './store';

export function App() {
  const { initializeGameBoard } = useCheckerStore();

  useEffect(() => {
    initializeGameBoard();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameBoard />} />
      </Route>
    </Routes>
  );
}
