let inputContainer = document.getElementById("phraseInputContainer");
let picId = parseInt(inputContainer.dataset.picid, 10);

const formSubmitHandler = async (event) => {
  event.preventDefault();

  const upperTextEl = document.getElementById("upperText");
  const lowerTextEl = document.getElementById("lowerText");

  const upperTextInput = document.getElementById("upperTextInput");
  const lowerTextInput = document.getElementById("lowerTextInput");

  let upperText = upperTextInput.value.trim();
  let lowerText = lowerTextInput.value.trim();
  let pictureId = picId;
  upperTextEl.innerHTML = upperText;
  lowerTextEl.innerHTML = lowerText;

  if (upperText && lowerText) {
    const userInput = await fetch("/api/picture/", {
      method: "POST",
      body: JSON.stringify({ upperText, lowerText, pictureId }),
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

//Save button

function download(url) {
  a = $("<a style='display:none' id='js-downloder'>")
    .attr("href", url)
    .attr("download", "download.png")
    .appendTo("body");

  a[0].click();

  a.remove();
  console.log("test");
}

function saveCapture(event) {
  html2canvas(event, {
    // logging: true, letterRendering: 1,  allowTaint: false, useCORS: true 
    // allowTaint: true,
  }).then(function (canvas) {
    download(canvas.toDataURL("image/png"));
  });
}

$("#btnSave").click(function () {
  const meme = document.querySelector("#memeContainer");
  saveCapture(meme);
});

function showDocument(url) {
  var win = window.open();
  win.document.write(`<iframe src ='${url}'></iframe>`);
}

// console.log(base64url);
