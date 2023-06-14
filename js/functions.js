//Функция для проверки длины строки.

const checkStringLength = (string, maxLength) => string.length <= length;

checkStringLength("Lake", 3);
//Функция для проверки, является ли строка палиндромом.

const isPalindrome = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(" ", "");
  console.log(checkStringLength);
  let newString = "";
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newString += normalizedString[i];
  }
  return newString === normalizedString;
  isPalindrome("Лёша на полке клопа нашёл ");
};
