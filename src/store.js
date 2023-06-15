import { create } from 'zustand'

export const directions = {
  bottomLeft: [1, -1],
  bottomRight: [1, 1],
  topRight: [-1, 1],
  topLeft: [-1, -1],
};

const useCheckerStore = create((set, get) => ({
  cleanHighlighted: () => {
    const board = get().gameBoard;
    board.forEach((row, i) => {
      row.forEach((item, j) => {
        item.highlight = false;
      })
    });

    set({ gameBoard: board });
  },
  initializeGameBoard: () => {
    const board = get().gameBoard;
    if (board.length === 0) {
      const result = [];

      for (let i = 0; i < 10; ++i) {
        const innerArray = new Array();

        for (let j = 0; j < 10; j++) {
          const color = (i + j) % 2 === 0 ? 'black' : 'white';
          const data = { color, taken: false, highlight: false };
          innerArray.push(data);
        }

        result.push(innerArray);
      }

      set({ gameBoard: result });
    }
  },
  gameBoard: [],
  checkCell: (row, col, direction, playerColor) => {
    const board = get().gameBoard;
    let nextRow = row + direction[0];
    let nextCol = col + direction[1];

    if (
      row < 0 || row > board.length ||            // oob
      col < 0 || col > board[row].length    // oob
      // board[row][col].color === playerColor ||          // my colour
      // board[nextRow][nextCol] !== ''     // can't eat
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
