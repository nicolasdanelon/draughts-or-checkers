export const directions = {
  bottomLeft: [1, -1],
  bottomRight: [1, 1],
  topRight: [-1, 1],
  topLeft: [-1, -1],
};

function addPieces(color, board, from, to) {
  for (let i = from; i <= to; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      if (board[i][j].color === 'black') {
        board[i][j].taken = true;
        board[i][j].checkerColor = color;
      }
    }
  }
}

export function addBlackPieces(board) {
  addPieces('black', board, 7, 9);
}

export function addWhitePieces(board) {
  addPieces('white', board, 0, 2);
}

export function setHighlightOff(board) {
  board.forEach((row, i) => {
    row.forEach((item, j) => {
      item.highlight = false;
    })
  });
}

export function fillBoard(result) {
  for (let i = 0; i < 10; ++i) {
    const innerArray = [];

    for (let j = 0; j < 10; j++) {
      const color = (i + j) % 2 === 0 ? 'black' : 'white';
      const data = {
        checkerColor: null,
        highlight: false,
        taken: false,
        color,
      };
      innerArray.push(data);
    }

    result.push(innerArray);
  }

  addBlackPieces(result);
  addWhitePieces(result);
}

export function moveChecker(board, fromX, fromY, toX, toY) {
  const checker = board[fromX][fromY];
  const isHighlighted = board[toX][toY].highlight;

  let offsetX = (fromX - toX > 0) ? -1 : 1;
  let offsetY = (fromY - toY > 0) ? -1 : 1;

  for (let i = fromX + offsetX, j = fromY + offsetY; i !== toX && j !== toY; i += offsetX, j += offsetY) {
    if (board[i][j].checkerColor !== checker.checkerColor) {
      board[i][j] = { ...board[i][j], checkerColor: null, taken: false }
    }
  }

  if (isHighlighted) {
    checker.taken = false;
    board[toX][toY].taken = true;
    board[toX][toY].checkerColor = checker.checkerColor;
    checker.checkerColor = null;
  }
}
