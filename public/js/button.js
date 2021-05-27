const phraseBtn = $(".phrase-button");
// let upperTextInput = document.getElementById("upperTextInput");
// let lowerTextInput = document.getElementById("lowerTextInput");
// const viewBtn = $("#view-button");

$(phraseBtn).on("click", function fillField() {
  console.log("fillField fired" + this.dataset.uppertext);

  upperTextInput.value = this.dataset.uppertext;
  lowerTextInput.value = this.dataset.lowertext;

  viewBtn.click();
});
