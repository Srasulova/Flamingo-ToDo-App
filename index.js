// initial elements

const btnAdd = document.querySelector(".btn-add"); // to add tasks to list
const input = document.querySelector(".add-task"); // input area to type task title
const list = document.querySelector(".list-of-tasks"); // list of tasks ul
const btnSave = document.getElementById("btn-save"); // save details button
const detailsModal = document.getElementById("details-modal"); // details/notes modal
const detailsModalTitle = document.getElementById("todoTitle"); //details title, same as input value
const detailsModalDetails = document.getElementById("todoDetails"); //notes (textarea) inside details modal

class TodoItem {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
}

//list of items, all new items are added to this list as a result of addTaskToList function
let items = [
  new TodoItem("clean kitchen", "123"),
  new TodoItem("wash dishes", "zzz"),
  new TodoItem("do laundry", ""),
  new TodoItem("baby food", ""),
];

// let items = ["Sabina", "Ariel", "Aliya", "&#x2665"]; -- initial values (only titles) i was working on(without details)

function addTaskToList(title) {
  // Assign task to the new list element
  let newListElement = document.createElement("li");
  newListElement.innerHTML = title;
  newListElement.value = title;

  //create div holding buttons
  let btnsDiv = document.createElement("div");
  btnsDiv.classList.add("buttons-div-margin-left");

  //create check, delete and edit button elements
  let btnCheck = document.createElement("button");
  let btnRemove = document.createElement("button");
  let btnEdit = document.createElement("button");

  //button to close details modal
  let btnCloseModal = document.querySelector(".close-details");

  //add google fonts class elements to btnCheck, bntRemove and btnEdite
  btnCheck.classList.add("material-symbols-outlined");
  btnRemove.classList.add("material-symbols-outlined");
  btnEdit.classList.add("material-symbols-outlined");

  //add tag value to buttons
  btnCheck.innerHTML = "check_circle";
  btnRemove.innerHTML = "cancel";
  btnEdit.innerHTML = "draft_orders";

  //add btnsDiv to list element
  newListElement.appendChild(btnsDiv);

  // Append the new list element to list of tasks
  list.appendChild(newListElement);

  //check button toggles .done to add line-through text-decoration to an todoItem
  btnCheck.addEventListener("click", function () {
    newListElement.classList.toggle("done");
  });

  // remove button completely erases the added todoItem
  btnRemove.addEventListener("click", function () {
    newListElement.remove();
  });

  // retreive todoItem detail value from the edit button on the list
  btnEdit.addEventListener("click", function () {
    items.forEach((item) => {
      if (item.title == title) {
        detailsModal.classList.remove("details-hidden");
        detailsModalTitle.value = title; //input area value = detail modal title
        detailsModalDetails.value = item.detail; //details textarea input
        detailsModalTitle.innerHTML = title;
      }
    });
  });

  //save textarea input(details) in the modal
  btnSave.addEventListener("click", saveTheNotes);

  // close the modal adding display:none
  btnCloseModal.addEventListener("click", function () {
    detailsModal.classList.add("details-hidden");
  });

  // add check, delete and edit buttons to btnsDiv
  btnsDiv.appendChild(btnCheck);
  btnsDiv.appendChild(btnRemove);
  btnsDiv.appendChild(btnEdit);
}

btnAdd.addEventListener("click", function () {
  // don't do anything now
  if (input.value == "") return;

  //push a new task to the items array
  items.push(new TodoItem(input.value, ""));
  console.log("something");

  // Add the new task to the list of tasks
  addTaskToList(input.value);

  // Clear the input field
  input.value = "";
});

//////////////////////
// Save modal logic //
//////////////////////
function saveTheNotes() {
  let title = detailsModalTitle.value;
  let details = detailsModalDetails.value;

  for (let item of items) {
    if (item.title == title) {
      item.detail = details;
      break; // exit early if the item is found
    }
  }
  detailsModal.classList.add("details-hidden");
  // Close modal after saving changes
}

items.forEach((todoItem) => addTaskToList(todoItem.title));

//TODO: play with buttons div size
