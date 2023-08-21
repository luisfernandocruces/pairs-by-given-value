const validateInput = (input) => {
  if (!input) return false;

  const separatedInput = input.trim().split(" ");

  if (separatedInput.length !== 2) return false;

  const [numbers, value] = input.split(" ");
  const numbersArray = numbers.split(",");
  const valueNumber = Number(value);

  if (
    !numbersArray.every((number) => Number.isInteger(Number(number))) ||
    !Number.isInteger(valueNumber)
  ) {
    return false;
  }

  return true;
};

module.exports = validateInput;
