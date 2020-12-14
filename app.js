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

// Table constructor
//Leave empty for prototype methods
function Table() {}

//newRow (appending new books)
//Pass in Entry!
Table.prototype.addRow = function (entry) {
  const newRow = document.createElement("tr");
  newRow.setAttribute("class", "table-info");
  newRow.innerHTML = `
    <th scope="row">${entry.author}</th>
    <td>${entry.title}</td>
    <td>${entry.number}</td>`;
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

  //Add book to list
  //Pass in Entry object
  table.addRow(entry);
  ///Clear input fields (call function) = leave empty
  table.clearInputs();
}
