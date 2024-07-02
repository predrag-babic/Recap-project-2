const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  const formElements = event.target.elements;
  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData);
  //console.log(data);

  const card = document.createElement("article");
  card.classList.add("card");

  const questionElement = document.createElement("h2");
  questionElement.textContent = data.question;
  //console.log(questionElement);

  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Show answer";
  buttonElement.classList.add("button-submit");

  const answerElement = document.createElement("p");
  answerElement.textContent = data.answer;
  answerElement.classList.add("cardanswer4");
  answerElement.setAttribute("hidden", "");
  //console.log(answerElement);

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tagElement = document.createElement("li");
  tagElement.textContent = data.tag;
  tagElement.classList.add("card__tag-list-item");
  //console.log(tagElement);

  tagList.append(tagElement);

  // Append elements to card
  card.append(questionElement);
  card.append(answerElement);
  card.append(tagList);
  card.append(buttonElement);

  // Append card to card container
  cardContainer.append(card);

  buttonElement.addEventListener("click", () => {
    answerElement.classList.toggle("card__answer--active");
    buttonElement.textContent = answerElement.classList.contains(
      "card__answer--active"
    )
      ? "Hide answer"
      : "Show answer";

    event.target.reset();
  });
});

const charactersLeftQuestion = document.querySelector(
  '[data-js="remaining-characters"]'
);
const questionInput = document.querySelector('[ data-js="question"]');

questionInput.addEventListener("input", (event1) => {
  const lengthOfInput = event1.target.value.length;
  charactersLeftQuestion.textContent = 150 - lengthOfInput;
});

const charactersLeftAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);
const answerInput = document.querySelector('[ data-js="answer"]');

answerInput.addEventListener("input", (event1) => {
  const lengthOfInput = event1.target.value.length;
  charactersLeftAnswer.textContent = 150 - lengthOfInput;
});
