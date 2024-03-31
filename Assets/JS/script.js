document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementsByClassName("close")[0];
  const formDetails = document.getElementById("form-details");

  loginBtn.addEventListener("click", function () {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  });

  signupBtn.addEventListener("click", function () {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById(
      "signup-confirm-password"
    ).value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const signupInfo = `
            <div>First Name: ${firstName}</div>
            <div>Last Name: ${lastName}</div>
            <div>Email: ${email}</div>
            <div>Password: ${password}</div>
            <div>Confirmed Password: ${confirmPassword}</div>
        `;
    formDetails.innerHTML = signupInfo;
    popup.style.display = "block";

    signupForm.reset();
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const loginInfo = `
            <div>Email: ${email}</div>
            <div>Password: ${password}</div>
        `;
    formDetails.innerHTML = loginInfo;
    popup.style.display = "block";

    loginForm.reset();
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
