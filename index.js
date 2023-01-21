const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".add-task");
const list = document.querySelector(".list-of-tasks"); // TODO: rename to "tasks"

let items = ["Sabina", "Ariel", "Aliya", "&#x2665"];

// btnRemove.addEventListener("click", function () {
//   console.log("you clicked this");
// });

// btnCheck.addEventListener("click", function () {
//   console.log("you clicked that");
// });

function addTaskToList(task) {
  // Assign task to the new list element
  let newListElement = document.createElement("li");
  newListElement.innerHTML = task;

  //create div holding buttons
  let btnsDiv = document.createElement("div");
  btnsDiv.classList.add("margin-left");

  //create check and delete button elements
  let btnCheck = document.createElement("button");
  let btnRemove = document.createElement("button");

  //add class elements to btnCheck and bntRemove
  btnCheck.classList.add("material-symbols-outlined");
  btnRemove.classList.add("material-symbols-outlined");

  //add tag value to btnCheck and btnRemove
  btnCheck.innerHTML = "check_circle";
  btnRemove.innerHTML = "cancel";

  // add check and delete button to btnsDiv
  btnsDiv.appendChild(btnCheck);
  btnsDiv.appendChild(btnRemove);

  //add btnsDiv to list element
  newListElement.appendChild(btnsDiv);

  // Append the new list element to list of tasks
  list.appendChild(newListElement);

  btnCheck.addEventListener("click", function () {
    newListElement.classList.add("done");
  });

  btnRemove.addEventListener("click", function () {
    newListElement.remove();
  });
}

btnAdd.addEventListener("click", function () {
  // don't do anything now
  if (input.value == "") return;

  // Add the new task to the list of tasks
  addTaskToList(input.value);

  // Clear the input field
  input.value = "";
});

items.forEach((element) => {
  addTaskToList(element);
});
