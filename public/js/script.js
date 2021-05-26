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

  if (upperText && lowerText) {
    const userInput = await fetch("/api/picture/", {
      method: "POST",
      body: JSON.stringify({ upperText, lowerText }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      return "Meme was not saved";
    }
  }

  console.log(upperTextEl);
  console.log(lowerText);
};

document
  .getElementById("meme-form")
  .addEventListener("submit", formSubmitHandler);
