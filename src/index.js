const {
  showDescription,
  requestInput,
  showInvalidInputFormat,
} = require("./utils/messages");
const validateFormat = require("./utils/validateFormat");

const main = async () => {
  showDescription();
  let input;

  do {
    input = await requestInput();
    const isValidInput = validateFormat(input);

    if (input !== "exit" && !isValidInput) {
      showInvalidInputFormat();
    }
  } while (input !== "exit");
};

main();
