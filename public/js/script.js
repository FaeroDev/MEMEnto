const formSubmitHandler = async (event) => {
  event.preventDefault();

  const upperTextEl = document.getElementById("upperText");
  const lowerTextEl = document.getElementById("lowerText");

  const upperTextInput = document.getElementById("upperTextInput");
  const lowerTextInput = document.getElementById("lowerTextInput");

  let upperText = upperTextInput.value.trim();
  let lowerText = lowerTextInput.value.trim();

  upperTextEl.innerHTML = upperText;
  lowerTextEl.innerHTML = lowerText;

  console.log(upperTextEl);
  console.log(lowerText);
};

document
  .getElementById("meme-form")
  .addEventListener("submit", formSubmitHandler);
