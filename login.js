const username = document.querySelector(".username");
const password = document.querySelector(".password");
const bntLogin = document.querySelector(".btn-login");
const incorrectCredentials = document.querySelector(".incorrect");
const emptyCredentials = document.querySelector(".empty");
const btnCloseEmpty = document.querySelector(".close");
const btnCloseIncorrect = document.querySelector(".close-x");

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

class Credential {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  username = "";
  password = "";
  validUserName = "AliyaMR";
  validPassword = "0305@";

  isValid() {
    const doesUserNameMatch = this.username == this.validUserName;
    const doesPasswordMatch = this.password == this.validPassword;

    if (doesUserNameMatch && doesPasswordMatch) {
      return true;
    }

    return false;
  }
}

bntLogin.addEventListener("click", function () {
  // pop-up alert window if username or password is empty
  if (username.value == "" || password.value == "") {
    emptyCredentials.classList.remove("hidden-empty");
    return;
  }

  const credentials = new Credential(username.value, password.value);
  if (credentials.isValid()) {
    // redirect to main page
    window.location.href = "index.html";
  } else {
    // pop-up alert window if username or password is incorrect
    incorrectCredentials.classList.remove("hidden-incorrect");
  }
});

btnCloseEmpty.addEventListener("click", function () {
  console.log("works");
  emptyCredentials.classList.toggle("hidden-empty");
  username.value = "";
  password.value = "";
});

btnCloseIncorrect.addEventListener("click", function () {
  console.log("worksssss");
  incorrectCredentials.classList.toggle("hidden-incorrect");
  username.value = "";
  password.value = "";
});
