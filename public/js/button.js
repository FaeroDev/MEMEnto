const histBtnGrp = document.getElementById("history-button-group");

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
