const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string만 포함된 변수는 대문자로(중요X라서)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //브라우저의 기본동작(여기선 새로고침..)을 막아준다!
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 6 && hour < 12) {
    greeting.innerText = `Good morning, ${username}`;
  } else if (hour >= 12 && hour < 18) {
    greeting.innerText = `Good afternoon, ${username}`;
  } else if (hour >= 18 && hour < 24) {
    greeting.innerText = `Good evening, ${username}`;
  } else {
    greeting.innerText = `Good night, ${username}`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}
