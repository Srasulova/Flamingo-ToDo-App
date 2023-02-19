const username = document.querySelector(".username");
const password = document.querySelector(".password");
const bntLogin = document.querySelector(".btn-login");
const incorrectCredentials = document.querySelector(".incorrect");
const emptyCredentials = document.querySelector(".empty");
const btnCloseEmpty = document.querySelector(".close");
const btnCloseIncorrect = document.querySelector(".close-x");
const form = document.querySelector(".login-form");

function clearCredentials() {
  username.value = "";
  password.value = "";
}

class Credential {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  validUserName = "AliyaMR";
  validPassword = "0305@";

  // isValid2 = () => this.username == this.validUserName && this.password == this.validPassword;

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
    form.style.webkitFilter = "blur(10px)";
    return;
  }

  const credentials = new Credential(username.value, password.value);
  if (credentials.isValid()) {
    // redirect to main page
    window.location.href = "index.html";
  } else {
    // pop-up alert window if username or password is incorrect
    incorrectCredentials.classList.remove("hidden-incorrect");
    form.style.webkitFilter = "blur(10px)";
  }
});

// close buttons for modals
btnCloseEmpty.addEventListener("click", function () {
  console.log("works");
  emptyCredentials.classList.toggle("hidden-empty");
  clearCredentials();
});

btnCloseIncorrect.addEventListener("click", function () {
  console.log("worksssss");
  incorrectCredentials.classList.toggle("hidden-incorrect");
  clearCredentials();
});
