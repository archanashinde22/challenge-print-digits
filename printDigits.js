const printDigits = (num) => {
  while (Math.floor(num / 10) !== 0) {
    console.log(num % 10);
    num = Math.floor(num / 10);
  }
  console.log(num);
};
printDigits(12);
