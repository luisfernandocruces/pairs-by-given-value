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

  if (
    valueNumber >= Number.MAX_SAFE_INTEGER ||
    numbersArray.some((number) => number >= Number.MAX_SAFE_INTEGER)
  ) {
    return false;
  }

  if (
    valueNumber <= Number.MIN_SAFE_INTEGER ||
    numbersArray.some((number) => number <= Number.MIN_SAFE_INTEGER)
  ) {
    return false;
  }

  return true;
};

module.exports = validateInput;
