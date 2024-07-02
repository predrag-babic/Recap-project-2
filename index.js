// phew… not a lot going on here. Please add some code!

const bodyElement = document.querySelector('[data-js="body"]');

const bookmarkButton = document.querySelector('[data-js="bookmark-button1"]');
console.log(bookmarkButton);
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
  console.log(bookmarkButton);
});

const bookmarkButton2 = document.querySelector('[data-js="bookmark-button2"]');
bookmarkButton2.addEventListener("click", () => {
  bookmarkButton2.classList.toggle("bookmark--active");
});

const bookmarkButton3 = document.querySelector('[data-js="bookmark-button3"]');
bookmarkButton3.addEventListener("click", () => {
  bookmarkButton3.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector(".card__button-answer");
const answer = document.querySelector(".card__answer");

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  answerButton.textContent = answer.classList.contains("card__answer--active")
    ? "Hide answer"
    : "Show answer";
});

const answerButton2 = document.querySelector('[data-js="button-answer2"]');
const answer2 = document.querySelector(".card__answer2");

answerButton2.addEventListener("click", () => {
  answer2.classList.toggle("card__answer--active");
  answerButton2.textContent = answer2.classList.contains("card__answer--active")
    ? "Hide answer"
    : "Show answer";
});

const answerButton3 = document.querySelector('[data-js="button-answer3"]');
const answer3 = document.querySelector(".card__answer3");

answerButton3.addEventListener("click", () => {
  answer3.classList.toggle("card__answer--active");
  answerButton3.textContent = answer3.classList.contains("card__answer--active")
    ? "Hide answer"
    : "Show answer";
});

const toggleModeButton = document.querySelector('[data-js="toggle-button"]');
console.log(toggleModeButton);
toggleModeButton?.addEventListener("click", () => {
  bodyElement.classList.toggle("darkmode");
});
