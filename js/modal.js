import { isEscapeKey } from "./util.js";

const COMMENTS_COUNTER = 5;

const bigPicture = document.querySelector(".big-picture");
const bigPictureClose = document.querySelector(".big-picture__cancel");
const bigPictureImg = document.querySelector(".big-picture__img img");
const modalLikesCounter = document.querySelector(".likes-count");
const modalCommentsCounter = document.querySelector(".social__comment-count");
const modalCommentsList = document.querySelector(".social__comments");
const modalCaption = document.querySelector(".social__caption");
const modalCommentsLoader = document.querySelector(".comments-loader");
const commentList = document.querySelector(".social__comment");

let showingComments = 0;
let comments = [];

const fillCommentDescription = () => {
  modalCommentsCounter.innerHTML = `${showingComments} из <span class="comments-count"> ${comments.length}</span> комментариев`;
};

const createComment = (comment) => {
  const newComment = commentList.cloneNode(true);
  const img = newComment.querySelector("img");
  img.src = comment.avatar;
  img.alt = comment.message;
  newComment.querySelector("p").textContent = comment.message;
  return newComment;
};

const setButtonState = () => {
  if (showingComments >= comments.length) {
    modalCommentsLoader.classList.add("hidden");
    return;
  }
  modalCommentsLoader.classList.remove("hidden");
};

const renderComments = () => {
  const currentComments = comments.slice(
    showingComments,
    showingComments + COMMENTS_COUNTER
  );
  showingComments = Math.min(
    showingComments + COMMENTS_COUNTER,
    comments.length
  );
  currentComments.forEach((item) =>
    modalCommentsList.append(createComment(item))
  );
  fillCommentDescription();
  setButtonState();
};

const fillPicture = (dataPost) => {
  bigPictureImg.src = dataPost.url;
  modalLikesCounter.textContent = dataPost.likes;
  modalCaption.textContent = dataPost.description;
};

// Функция закрытия модального окна
const closeModal = () => {
  document.body.classList.remove("modal-open");
  bigPicture.classList.add("hidden");
  document.addEventListener("keydown", modalEscKeydown);
  bigPictureClose.removeEventListener("click", buttonModalCloseClick);

  showingComments = 0;
};

const commentsLoadClick = (evt) => {
  evt.preventDefault();
  renderComments();
};

function modalEscKeydown(event) {
  if (event.key === "Escape" && !event.target.closest(".social__footer-text")) {
    event.preventDefault();
    closeModal();
  }
}

function buttonModalCloseClick(event) {
  event.preventDefault();
  closeModal();
}

const openModal = () => {
  document.body.classList.add("modal-open");
  bigPicture.classList.remove("hidden");
  document.addEventListener("keydown", modalEscKeydown);
  bigPictureClose.addEventListener("click", buttonModalCloseClick);
  modalCommentsLoader.addEventListener("click", commentsLoadClick);
};

// Функция открытия модального окна
const renderModal = (dataPost) => {
  comments = dataPost.comments;
  modalCommentsList.innerHTML = "";
  openModal();
  fillPicture(dataPost);
  renderComments();
};

export { renderModal };
