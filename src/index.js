const {
  showDescription,
  requestInput,
  showInvalidInputFormat,
  showPairs,
} = require("./utils/messages");
const validateInput = require("./utils/validateInput");
const getPairsByGivenNumber = require("./utils/getPairsByGivenNumber");

const main = async () => {
  showDescription();
  let input;

  while (true) {
    input = await requestInput();
    if (input === "exit") break;

    const isValidInput = validateInput(input);

    if (!isValidInput) {
      showInvalidInputFormat();

      // eslint-disable-next-line no-continue
      continue;
    }

    const numbers = input.split(" ")[0].split(",");
    const givenValue = input.split(" ")[1];

    const pairs = getPairsByGivenNumber(numbers, givenValue);

    showPairs(pairs);
  }
};

main();
