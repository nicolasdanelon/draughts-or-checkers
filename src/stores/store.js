import { create } from 'zustand';
import { directions, fillBoard, moveChecker, setHighlightOff } from '../utils/game-helpers.js';

const useCheckerStore = create((set, get) => ({
  moveOrHighlight: (x, y, color, taken, highlight) => {
    if (x !== get().selectedSquare[0] && y !== get().selectedSquare[1] && highlight === true) {
      get().moveChecker(get().selectedSquare[0], get().selectedSquare[1], x, y);
      get().setSelectedSquare(null, null);
      get().cleanHighlighted();
    } else if (color === 'black' && taken) {
      get().cleanHighlighted();
      get().setSelectedSquare(x, y);
      Object.values(directions).forEach((direction) => {
        get().checkCell(x, y, direction, color);
      })
      return;
    }
    get().cleanHighlighted();
  },
  moveChecker: (fromX, fromY, toX, toY) => {
    const board = get().gameBoard;
    moveChecker(board, fromX, fromY, toX, toY);

    set({ gameBoard: board });
  },
  cleanHighlighted: () => {
    const board = get().gameBoard;
    setHighlightOff(board);

    set({ gameBoard: board });
  },
  initializeGameBoard: () => {
    const board = get().gameBoard;
    if (board.length > 0) return;

    const result = [];
    fillBoard(result);
    set({ gameBoard: result });
  },
  gameBoard: [],
  selectedSquare: [null, null],
  setSelectedSquare: (x, y) => {
    set({selectedSquare: [x, y]})
  },
  checkCell: (row, col, direction, playerColor) => {
    const board = get().gameBoard;
    let nextRow = row + direction[0];
    let nextCol = col + direction[1];

    if (
      row < 0 || row > board.length ||
      col < 0 || col > board[row].length
    ) {
      return;
    }

    if (!board[row][col].taken) {
      board[row][col].highlight = true;
      set({ gameBoard: board });
    }

    if (
      nextRow > -1 && nextRow < board.length &&
      nextCol > -1 && nextCol < board.length
    ) {
      get().checkCell(nextRow, nextCol, direction, playerColor);
    }
  }
}))

export default useCheckerStore;
