const formSubmitHandler = async (event) => {
  event.preventDefault();

  const upperTextEl = document.getElementById("upperText");
  const lowerTextEl = document.getElementById("lowerText");

  const upperTextInput = document.getElementById("upperTextInput");
  const lowerTextInput = document.getElementById("lowerTextInput");

  const upperText = upperTextInput.value.trim();
  const lowerText = lowerTextInput.value.trim();

  upperText = upperTextEl.textContent;
  lowerText = lowerTextEl.textContent;

  console.log(upperTextEl);
  console.log(lowerText);
};

document
  .getElementById("meme-form")
  .addEventListener("submit", formSubmitHandler);
