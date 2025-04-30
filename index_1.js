const reverseInt = (number) => {
  const absNumber = Math.abs(number);
  const string = absNumber.toString();

  let reversedString = '';
  let i = 0;

  while (i < string.length) {
    reversedString = string[i] + reversedString;
    i = i + 1;
  }

  const reversedNumber = Number(reversedString);
  let result = 1;

  if (number >= 0) {
    result = 1 * reversedNumber;
  } else {
    result = 1 * -reversedNumber;
  }

  return result;
};

export default reverseInt;

// Проверка

const number = 8900;
const result = reverseInt(number);

console.log(result);
