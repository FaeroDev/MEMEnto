const phraseBtn = $(".phrase-button");
let upperTextInput = document.getElementById("upperTextInput");
let lowerTextInput = document.getElementById("lowerTextInput");
const subBtn = $("#submit-button");

<<<<<<< HEAD
$(phraseBtn).on("click", function fillField() {
  console.log("fillField fired" + this.dataset.uppertext);

  upperTextInput.value = this.dataset.uppertext;
  lowerTextInput.value = this.dataset.lowertext;

  subBtn.click();
});
=======
for (let phrase of { phrase }) {
  makeHistoryBtn();
}

// histArr.forEach(makeHistoryBtn);
function makeHistoryBtn(item, index) {
  console.log("makeHistoryBtn fired");
  const historyBtn = document.createElement("button");
  historyBtn.setAttribute("id", `button-{phrase.id}`);
  historyBtn.setAttribute("type", "button");
  historyBtn.setAttribute("class", "btn border histBtn");
  //   historyBtn.innerHTML = searchCap + ", " + item.map;
  histBtnGrp.appendChild(historyBtn);
}
>>>>>>> 3599fd3ac9d03c9a00e77f072142316fff382303
