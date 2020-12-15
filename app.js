const titleInput = document.getElementById("input-title");
const authorInput = document.getElementById("input-author");
const numberInput = document.getElementById("input-number");
const submitBtn = document.getElementById("submit-btn");
const tableEntry = document.getElementById("table-entry");
const alert = document.getElementById("alert");
const alertDlt = document.querySelector(".close");
const alertControl = document.querySelector(".alert");

console.log(tableEntry);
//Entry construcotr for each title, author, and number input
function Entry(title, author, number) {
  this.title = title;
  this.author = author;
  this.number = number;
}
//show alert
function showAlert() {
  alertControl.removeAttribute("class", "collapse.show");
}

//Handle Alert Btn
alertDlt.addEventListener("click", handleDlt);
function handleDlt(e) {
  e.preventDefault();
  alertControl.setAttribute("class", "collapse");
}

// Table constructor
//Leave empty for prototype methods
function Table() {}

//prototype for deleting a book from the DOM
//Want to remove the Tr element
Table.prototype.deleteBook = function (target) {
  if (target.className === "close mr-3 delete") {
    target.parentElement.parentElement.remove();
  }
};

//newRow (appending new books)
//Pass in Entry!
Table.prototype.addRow = function (entry) {
  const newRow = document.createElement("tr");
  newRow.setAttribute("class", "table-info");
  newRow.innerHTML = `
    <th scope="row">${entry.author}</th>
    <td>${entry.title}</td>
    <td>${entry.number}</td>
    <td><button type="button" class="close mr-3 delete" data-dismiss="alert">&times;</button></td>`;
  tableEntry.appendChild(newRow);
};

//clearInputs
// Grab inputs --- Set to empty string to clear fields
Table.prototype.clearInputs = function () {
  titleInput.value = "";
  authorInput.value = "";
  numberInput.value = "";
};

//Events and Submit function for input data
submitBtn.addEventListener("click", submit);
function submit(e) {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const number = numberInput.value;
  //   console.log(title, author, number);

  const entry = new Entry(title, author, number);
  console.log(entry);

  //new Instantiate Table constructor
  const table = new Table();

  if (title === " " || author === " " || number === "") {
    showAlert();
  } else {
    //Add book to list
    //Pass in Entry object
    table.addRow(entry);
    ///Clear input fields (call function) = leave empty
    table.clearInputs();
  }
}

//Event handling the deleting a book
tableEntry.addEventListener("click", function (e) {
  const table = new Table();
  console.log("clicked");
  table.deleteBook(e.target);
  e.preventDefault();
});
