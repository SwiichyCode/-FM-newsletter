const form = document.getElementById("form");
const formSuccess = document.getElementById("success-form");
const emailAddressInput = document.getElementById("email");
const emailAddressBtn = document.getElementById("email-btn");
const errorMessage = document.getElementById("errorMessage");
const dismissMessageBtn = document.getElementById("dismissMessageBtn");
const emailAddressReception = document.getElementById("emailAddressReception");

emailAddressBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const textError = "Valid email required";
  let email = emailAddressInput.value;

  //   console.log(email);

  if (!checkEmail(emailAddressInput.value) || !emailAddressInput.value) {
    errorMessage.textContent = textError;
    emailAddressInput.classList.add("error");
  } else {
    form.style.display = "none";
    formSuccess.style.display = "flex";

    emailAddressReception.textContent = email;
  }
});

emailAddressInput.addEventListener("input", () => {
  if (!checkEmail(emailAddressInput.value) || !emailAddressInput.value) {
    errorMessage.textContent = "";
    emailAddressInput.classList.remove("error");
  }
});

const checkEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

dismissMessageBtn.addEventListener("click", () => {
  formSuccess.style.display = "none";
  form.style.display = "flex";
  emailAddressInput.value = "";
});
