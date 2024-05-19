const form = document.querySelector(".login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  if (!email || !password) {
    alert("Заповніть форму!");
    return;
  }

  const formDate = {
    email: email,
    password: password,
  };
  console.log(formDate);
  event.currentTarget.reset();
});
