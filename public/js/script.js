let inputContainer = document.getElementById("phraseInputContainer");
let picId = parseInt(inputContainer.dataset.picid, 10);
const viewBtn = $("#view-button");
const submitBtn = $("#submit-button");
const upperTextEl = document.getElementById("upperText");
const lowerTextEl = document.getElementById("lowerText");
const upperTextInput = document.getElementById("upperTextInput");
const lowerTextInput = document.getElementById("lowerTextInput");

const formSubmitHandler = async (event) => {
  event.preventDefault();
  let upperText = upperTextInput.value.trim();
  let lowerText = lowerTextInput.value.trim();
  let pictureId = picId;
  upperTextEl.innerHTML = upperText;
  lowerTextEl.innerHTML = lowerText;
  alert("MEME SAVED TO DATABASE");

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

// VIEW BUTTON

$(viewBtn).on("click", function fillField() {
  console.log("button pressed" + upperText);
  upperTextEl.innerHTML = upperTextInput.value;
  lowerTextEl.innerHTML = lowerTextInput.value;
});

//Save button

function download(url) {
  a = $("<a style='display:none' id='js-downloder'>")
    .attr("href", url)
    .attr("download", "download.png")
    .appendTo("body");

  a[0].click();

  a.remove();
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

// Changing the Text Size and Color
const memeText = document.querySelectorAll(".text-uppercase");
const colorButton = document.querySelector("#color-button");
let textColor;
let textSize;

//Changing the Text Color
function switchTextBlack() {
  memeText[0].setAttribute("style", `font-size: ${textSize};color: black`);
  memeText[1].setAttribute("style", `font-size: ${textSize};color: black`);
  textColor = "black";
}

$("#black").click(switchTextBlack);

function switchTextWhite() {
  memeText[0].setAttribute("style", `font-size: ${textSize};color: white`);
  memeText[1].setAttribute("style", `font-size: ${textSize};color: white`);
  textColor = "white";
}

$("#white").click(switchTextWhite);

function switchTextRed() {
  memeText[0].setAttribute("style", `font-size: ${textSize};color: red`);
  memeText[1].setAttribute("style", `font-size: ${textSize};color: red`);
  textColor = "red";
}

$("#red").click(switchTextRed);

function switchTextBlue() {
  memeText[0].setAttribute("style", `font-size: ${textSize};color: blue`);
  memeText[1].setAttribute("style", `font-size: ${textSize};color: blue`);
  textColor = "blue";
}

$("#blue").click(switchTextBlue);

function switchTextGreen() {
  memeText[0].setAttribute("style", `font-size: ${textSize};color: green`);
  memeText[1].setAttribute("style", `font-size: ${textSize};color: green`);
  textColor = "green";
}

$("#green").click(switchTextGreen);

function smallText() {
  memeText[0].setAttribute("style", `font-size: 12pt; color:${textColor}`);
  memeText[1].setAttribute("style", `font-size: 12pt; color:${textColor}`);
  textSize = "12pt";
}

//Changing the Text Size
$("#small").click(smallText);

function medText() {
  memeText[0].setAttribute("style", `font-size: 24pt; color:${textColor}`);
  memeText[1].setAttribute("style", `font-size: 24pt; color:${textColor}`);
  textSize = "24pt";
}

$("#medium").click(medText);

function largeText() {
  memeText[0].setAttribute("style", `font-size: 36pt; color:${textColor}`);
  memeText[1].setAttribute("style", `font-size: 36pt; color:${textColor}`);
  textSize = "36pt";
}

$("#large").click(largeText);

// Dragable Text

dragElementTop(document.getElementById("upperText"));

function dragElementTop(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElementBot(document.getElementById("lowerText"));

function dragElementBot(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
