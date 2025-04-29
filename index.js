const reverseInt = (number) => {
    const absNumber = Math.abs(number);
    const string = absNumber.toString();
    let reversedString = '';
    let i = string.length - 1;
  
    while (i >= 0) {
      reversedString = reversedString + string[i];
      i = i - 1;
    }
    const reversedNumber = Number(reversedString);
  
    return number >= 0 ? reversedNumber : -reversedNumber;
  };

  export default reverseInt;
  
  // Проверка

  const number = -123;
  const result = reverseInt(number);
  console.log(result);
  