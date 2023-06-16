import { fillBoard } from '../src/utils/game-helpers.js';

describe('fillBoard', () => {
  const result = [];

  beforeEach(() => {
    fillBoard(result);
  });

  test('should correctly fill the board with 100 squares', () => {
    expect(result.length).toBe(10);
    result.forEach((innerArray) => {
      expect(innerArray.length).toBe(10);
    });
  });

  test('first square should be black, with a white checker', () => {
    const expected = {
      checkerColor: 'white',
      highlight: false,
      taken: true,
      color: 'black',
    };

    expect(result[0][0]).toEqual(expected);
  });

  test('first square should be black, with a black checker', () => {
    const expectedDataTwo = {
      checkerColor: 'black',
      highlight: false,
      taken: true,
      color: 'black',
    };

    expect(result[7][7]).toEqual(expectedDataTwo);
  });
});
