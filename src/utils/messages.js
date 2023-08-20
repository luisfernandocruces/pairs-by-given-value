require("colors");

const showDescription = () => {
  console.clear();
  console.log("========================".green);
  console.log("Get Pairs by given value".green);
  console.log("========================\n".green);

  console.log(
    "This process will return all pairs of integers from a list that sum to a given value. Example:"
  );
  console.log(`${"Input:".yellow} \n0,1,2,3,4,5,6,7,8,9,10 10`);
  console.log(`${"Output:".yellow} \n6,4 \n7,3 \n8,2 \n9,1 \n10,0\n`);
};

const requestInput = () =>
  new Promise((resolve) => {
    // eslint-disable-next-line global-require
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      "\nPlease, enter the list of numbers(separated by a comma), following  by a space and then the value like the example above. To finish the process, type 'exit'\n",
      (option) => {
        readline.close();
        resolve(option.toLowerCase());
      }
    );
  });

const showInvalidInputFormat = () => {
  console.log("Invalid input. Try again.".red);
};

module.exports = {
  showDescription,
  requestInput,
  showInvalidInputFormat,
};
