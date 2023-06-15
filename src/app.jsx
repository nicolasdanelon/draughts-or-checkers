import useCheckerStore from './store'

const Square = ({ color }) => {
  return <div class={`square ${color}-square`}>{"\u00A0"}</div>
}

export function App() {
  const { gameBoard, checkCell } = useCheckerStore();

  return (
    <div class="wrapper-board">
      {gameBoard.map((row, i) => {
        return row.map((col, j) => {
          const color = (i + j) % 2 === 0 ? 'black' : 'white';

          return (
            <Square color={color} />
          );
        })
      })}
    </div >
  )
}
