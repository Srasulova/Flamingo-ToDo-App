// function Credentials(username, password) {
//   this.username = username;
//   this.password = password;

//   validUserName = "AliyaMR";
//   validPassword = "0305@";

//   isValid = () => {
//     const doesUserNameMatch = this.username == this.validUserName;
//     const doesPasswordMatch = this.password == this.validPassword;

//     if (doesUserNameMatch && doesPasswordMatch) {
//       return true;
//     }

//     return false;
//   };
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   constructor() {
//     this.name = "Anonymous";
//   }

//   #greet = () => `Hello ${this.name}!`;
// }

// let person = new Person("Sabina");
// let person2 = new Person("Ariel");
// let p = new Person();
// person.greet();
// console.log(person2.greet());

// function addTaskToList(task) {
//   // Assign task to the new list element
//   let newListElement = document.createElement("li");
//   newListElement.innerHTML = task;

//   //create div holding buttons
//   let btnsDiv = document.createElement("div");
//   btnsDiv.classList.add("margin-left");

//   //create check, delete and edit button elements
//   let btnCheck = document.createElement("button");
//   let btnRemove = document.createElement("button");
//   let btnEdit = document.createElement("button");
//   let btnCloseModal = document.querySelector(".close-details");

//   //add class elements to btnCheck, bntRemove and btnEdite
//   btnCheck.classList.add("material-symbols-outlined");
//   btnRemove.classList.add("material-symbols-outlined");
//   btnEdit.classList.add("material-symbols-outlined");

//   //add tag value to btnCheck and btnRemove
//   btnCheck.innerHTML = "check_circle";
//   btnRemove.innerHTML = "cancel";
//   btnEdit.innerHTML = "draft_orders";

//   // add check and delete button to btnsDiv
//   btnsDiv.appendChild(btnCheck);
//   btnsDiv.appendChild(btnRemove);
//   btnsDiv.appendChild(btnEdit);

//   //add btnsDiv to list element
//   newListElement.appendChild(btnsDiv);

//   // Append the new list element to list of tasks
//   list.appendChild(newListElement);

//   btnCheck.addEventListener("click", function () {
//     newListElement.classList.add("done");
//   });

//   btnRemove.addEventListener("click", function () {
//     newListElement.remove();
//   });

//   btnEdit.addEventListener("click", function () {
//     detailsModal.classList.remove("details-hidden");
//   });

//   btnCloseModal.addEventListener("click", function () {
//     detailsModal.classList.toggle("details-hidden");
//   });
// }
