const titleInput = document.getElementById("input-title");
const authorInput = document.getElementById("input-author");
const numberInput = document.getElementById("input-number");
const submitBtn = document.getElementById("submit-btn");
const tableEntry = document.getElementById("table-entry");

//Entry construcotr for each title, author, and number input
function Entry(title, author, number) {
  this.title = title;
  this.author = author;
  this.number = number;
}

submitBtn.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const number = numberInput.value;
  //   console.log(title, author, number);

  const entry = new Entry(title, author, number);
  console.log(entry);
}
