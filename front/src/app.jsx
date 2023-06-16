import { useEffect } from 'preact/compat';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx';
import Game from './pages/game.jsx';
import Match from './pages/match.jsx';
import Layout from "./components/layout.jsx";
import useCheckerStore from './stores/store.js';

export function App() {
  const { initializeGameBoard } = useCheckerStore();

  useEffect(() => {
    initializeGameBoard();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/match/:id" element={<Match />} />
      </Route>
    </Routes>
  );
}
