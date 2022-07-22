const fysOriginal = (arr: string[]) => {
  let roll = Math.floor(Math.random() * arr.length);

  const strikeOut = [];
  while (arr.length) {
    strikeOut.push(arr.splice(roll, 1)[0]);
    roll += 1;

    if (roll >= arr.length) roll = 0;
  }
  return strikeOut;
};

export default fysOriginal;
