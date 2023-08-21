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
  console.log(`${"Output:".yellow} \n+ 4,6 \n+ 3,7 \n+ 2,8 \n+ 1,9 \n+ 0,10\n`);
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

const showPairs = (pairs) => {
  if (pairs.length === 0) {
    console.log("No pairs found.".red);
  } else {
    pairs.forEach((pair) => {
      const p1 = pair[0];
      const p2 = pair[1];
      console.log(`+ ${p1.toString().green}, ${p2.toString().green}`);
    });
  }
};

module.exports = {
  showDescription,
  requestInput,
  showInvalidInputFormat,
  showPairs,
};
