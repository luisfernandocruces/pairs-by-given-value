const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const getPairsByGivenNumber = require("./getPairsByGivenNumber");

describe("getPairsByGivenNumber tests", () => {
  it("should return the pairs of numbers that sum up to the given value when numbers in the list are positive", () => {
    const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const givenValue1 = 10;
    const pairs1 = getPairsByGivenNumber(numbers1, givenValue1);
    assert.deepStrictEqual(pairs1, [
      [4, 6],
      [3, 7],
      [2, 8],
      [1, 9],
      [0, 10],
    ]);

    const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const givenValue2 = 10;
    const pairs2 = getPairsByGivenNumber(numbers2, givenValue2);
    assert.deepStrictEqual(pairs2, [
      [4, 6],
      [3, 7],
      [2, 8],
      [1, 9],
    ]);
  });

  it("should return the pairs of numbers that sum up to the given value when numbers in the list are negative", () => {
    const numbers1 = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    const givenValue1 = -10;
    const pairs1 = getPairsByGivenNumber(numbers1, givenValue1);
    assert.deepStrictEqual(pairs1, [
      [-4, -6],
      [-3, -7],
      [-2, -8],
      [-1, -9],
      [0, -10],
    ]);

    const numbers2 = [-100, -200, -300];
    const givenValue2 = -500;
    const pairs2 = getPairsByGivenNumber(numbers2, givenValue2);
    assert.deepStrictEqual(pairs2, [[-200, -300]]);
  });

  it("should return the pairs of numbers that sum up to the given value when numbers in the list are positive and negative ", () => {
    const numbers1 = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const givenValue1 = 12;
    const pairs1 = getPairsByGivenNumber(numbers1, givenValue1);
    assert.deepStrictEqual(pairs1, [
      [0, 12],
      [-4, 16],
      [5, 7],
    ]);

    const numbers2 = [1, -1, 2, -2, 5, -4, 0];
    const givenValue2 = 0;
    const pairs2 = getPairsByGivenNumber(numbers2, givenValue2);
    assert.deepStrictEqual(pairs2, [
      [1, -1],
      [2, -2],
    ]);
  });

  it("should return empty list when there is no pairs", () => {
    const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const givenValue1 = -1;
    const pairs1 = getPairsByGivenNumber(numbers1, givenValue1);
    assert.deepStrictEqual(pairs1, []);

    const numbers2 = [5, 10, 20, 30];
    const givenValue2 = 5;
    const pairs2 = getPairsByGivenNumber(numbers2, givenValue2);
    assert.deepStrictEqual(pairs2, []);

    const numbers3 = [5];
    const givenValue3 = 5;
    const pairs3 = getPairsByGivenNumber(numbers3, givenValue3);
    assert.deepStrictEqual(pairs3, []);

    const numbers4 = [];
    const givenValue4 = 5;
    const pairs4 = getPairsByGivenNumber(numbers4, givenValue4);
    assert.deepStrictEqual(pairs4, []);
  });
});
