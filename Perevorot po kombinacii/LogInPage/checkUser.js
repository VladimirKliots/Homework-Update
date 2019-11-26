const sendBtn = document.getElementsByClassName("form__button")[0];
const messageBanner = document.getElementsByClassName("massage")[0];
const loginName = document.getElementsByClassName("login")[0];
const deviceName = document.getElementsByClassName("deviceName")[0];
const passwordCheck = document.getElementsByClassName("password")[0];

sendBtn.addEventListener("click", function() {
  passwordValidation();
  loginValidation();
  deviceNameValidation();
  const data = {
    login: loginName.value,
    deviceName: deviceName.value,
    password: passwordCheck.value
  };
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "login.php");
  xhr.onload = function() {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  };

  xhr.send(JSON.stringify(data));
  /*xhr.timeout = 10000;
  let q = xhr.getAllResponseHeaders();
  xhr.onload = function () {
    //window.location.href = String(xhr.responseURL);
    console.log(String(xhr.responseURL) + "       -");
  };*/
});

function passwordValidation() {
  if (passwordCheck.value.length > 20) {
    messageBanner.style.display = "flex";
    passwordCheck.value = "";
  } else if (passwordCheck.value.length > 0 && passwordCheck.value.length < 6) {
    messageBanner.style.display = "flex";
    passwordCheck.value = "";
  } else if (
    passwordCheck.value.length >= 6 &&
    passwordCheck.value.length < 21
  ) {
    messageBanner.style.display = "none";
  }
}

function loginValidation() {
  if (loginName.value.length > 20) {
    messageBanner.style.display = "flex";
    deviceName.value = "";
  }
}

function deviceNameValidation() {
  if (deviceName.value.length > 20) {
    messageBanner.style.display = "flex";
    deviceName.value = "";
  }
}
