//Функция для проверки длины строки.

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength("Lake", 3);
//Функция для проверки, является ли строка палиндромом.

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(" ", ""); //Делаем нижний регистр и убираем пробелы

  return string === string.split("").reverse("").join(""); //Сравниваем string with reversed string.Разбиваем строчку на массив и переворачиваем символы в обратном направлении и склеиваем каждый символ
};
console.log(isPalindrome("Лёша на полке клопа нашёл "));
