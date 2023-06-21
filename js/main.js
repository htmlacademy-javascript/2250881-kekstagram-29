const DESCRIPTIONS = [
  "Мне нужны шестимесячные каникулы дважды в год.",
  "Жизнь не идеальна, а вот мой лук – да.",
  "Цени моменты.",
  "Воскресенье — еще один способ сказать: Какой чудесный день!",
];
const NAMES = ["Игнат", "Илларион", "Роза", "Анастасия", "Валера"];
const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
];

const POST_COUNTER = 25;

let postId = 1;
let commentsId = 1;

//Функция рандомных чисел
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)]; //В ф-ию передаем какой то [] и возвращаем слуйчайный эелемент этого [] в диапозоне

//Функция которая перемешивает массив
const shuffleArray = (elements) => {
  for (let i = elements.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = elements[i];
    elements[i] = elements[j];
    elements[j] = temp;
  }
  return elements;
};

const createMessage = (elements) => {
  return shuffleArray(elements).slice(0, getRandomNumber(1, 2)).join(" ");
};

const createComment = () => ({
  id: commentsId++,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: createMessage(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPost = () => ({
  id: postId,
  url: `photos/${postId++}.jpg`,
  likes: getRandomNumber(15, 150), //Получение рандомного числа лайков от 15 до 150
  description: getRandomArrayElement(DESCRIPTIONS),
  comments: Array.from({ length: getRandomNumber(0, 30) }, createComment),
});

// Функция которая возвращает массив из 25 объектов

const createPosts = () => Array.from({ length: POST_COUNTER }, createPost);
console.log(createPosts());

// const createPosts = () => {
//   const posts = [];
//   for (let i = 0; i < POST_COUNTER; i++) {
//     posts.push(createPost());
//   }
//   return posts;
// };

// console.log(createPosts());
