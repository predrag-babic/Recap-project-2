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

  //Create bookmark form card

  const bookmarkCard = document.createElement("div");
  bookmarkCard.classList.add("card__button-bookmark");
  console.log(bookmarkCard);

  //Create bookmark form button

  /*const bookmarkFormButton = document.createElement("button");
  bookmarkFormButton.classList.add("bookmark");
  bookmarkFormButton.setAttribute("aria-label", "bookmark");
  bookmarkFormButton.setAttribute("type", "button");
  // console.log(bookmarkFormButton);

  //SVG Element create

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("bookmark__icon");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");

  //Path create
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );

  tagList.append(tagElement);
  svg.append(path);
  bookmarkFormButton.append(svg);
  bookmarkCard.append(bookmarkFormButton);*/

  bookmarkCard.innerHTML = `
             <button
                class="bookmark"
                aria-label="bookmark"
                type="button"
                data-js="bookmark-button3"
              >
                <svg
                  class="bookmark__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </button>
          
`;
  // Append elements to card
  card.append(questionElement);
  card.append(answerElement);
  card.append(tagList);
  card.append(buttonElement);
  card.append(bookmarkCard);

  // Append card to card container
  cardContainer.append(card);
  console.log(cardContainer);

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
