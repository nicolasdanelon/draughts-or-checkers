import { create } from 'zustand'

export const canMoveHere = '*';
export const emptySquare = '';

const useCheckerStore = create((set, get) => ({
    gameBoard: Array(10).fill(Array(10).fill(emptySquare)),
    checkCell: (row, col, direction, playerColor) => {
        const board = get().gameBoard;
        let nextRow = row + direction[0];
        let nextCol = col + direction[1];

        if (
            row < 0 || row > board.length ||            // oob
            col < 0 || col < board[row].length ||       // oob
            board[row][col] === playerColor ||          // my colour
            board[nextRow][nextCol] !== emptySquare     // can't eat
        ) {
            return;
        }

        if (board[row][col] === emptySquare) {
            board[row][col] = canMoveHere;
            set({ gameBoard: board });
        }

        checkCell(nextRow, nextCol, direction, playerColor);
    }
}))

export default useCheckerStore;