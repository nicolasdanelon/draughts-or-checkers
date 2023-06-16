import { moveChecker } from '../src/utils/game-helpers.js';

describe('moveChecker', () => {
  let board;

  beforeEach(() => {
    board = [
      [{ checkerColor: 'red', taken: false }, { checkerColor: 'red', taken: false }],
      [{ checkerColor: 'black', taken: false }, { checkerColor: 'black', taken: false }],
    ];
  });

  it('moves the checker and updates the board correctly', () => {
    const fromX = 0;
    const fromY = 0;
    const toX = 1;
    const toY = 1;

    moveChecker(board, fromX, fromY, toX, toY);

    expect(board[fromX][fromY].checkerColor).toBe('red');
    expect(board[toX][toY].checkerColor).toBe('black');

    expect(board[1][0].checkerColor).toBe('black');
    expect(board[0][1].checkerColor).toBe('red');
    expect(board[1][1].checkerColor).toBe('black');

    expect(board[fromX][fromY].taken).toBe(false);
    expect(board[toX][toY].taken).toBe(false);
  });

  it('does not move the checker if the destination is not highlighted', () => {
    const fromX = 0;
    const fromY = 0;
    const toX = 1;
    const toY = 1;

    board[toX][toY].highlight = false;

    moveChecker(board, fromX, fromY, toX, toY);

    expect(board[fromX][fromY].checkerColor).toBe('red');
    expect(board[toX][toY].checkerColor).toBe('black');

    expect(board[1][0].checkerColor).toBe('black');
    expect(board[0][1].checkerColor).toBe('red');

    expect(board[fromX][fromY].taken).toBe(false);
    expect(board[toX][toY].taken).toBe(false);
  });
});
