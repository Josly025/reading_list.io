const titleInput = document.getElementById("input-title");
const authorInput = document.getElementById("input-author");
const numberInput = document.getElementById("input-number");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();
  console.log("clicked");
}
