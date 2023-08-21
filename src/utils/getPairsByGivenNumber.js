const getPairsByGivenNumber = (numbers, value) => {
  const map = {};
  const pairs = [];

  numbers.forEach((number) => {
    const complement = value - number;

    if (map[complement]) pairs.push([complement, number]);

    map[number] = true;
  });

  return pairs;
};

module.exports = getPairsByGivenNumber;
