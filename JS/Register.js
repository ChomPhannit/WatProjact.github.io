const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameKH = form.nameKH.value.trim();
  const username = form.username.value.trim();
  const dob = form.dob.value.trim();
  const gender = form.gender.value.trim();
  const email = form.email.value.trim().toLowerCase();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (nameKH.length < 3 || username.length < 3 || password.length < 6) {
    message.textContent =
      "Name KH and Username must be at least 3 characters, and password at least 6 characters.";
    message.className = "message error";
    message.hidden = false;
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email address.";
    message.className = "message error";
    message.hidden = false;
    return;
  }

  if (password !== confirmPassword) {
    message.textContent =
      "Passwords do not match. Please confirm your password.";
    message.className = "message error";
    message.hidden = false;
    return;
  }

  const registeredUsers =
    JSON.parse(localStorage.getItem("registeredUsers")) || [];
  const existingUser = registeredUsers.find((user) => user.email === email);
  if (existingUser) {
    message.textContent = "This email is already registered. Please login.";
    message.className = "message error";
    message.hidden = false;
    return;
  }

  const userData = {
    id: registeredUsers.length + 1,
    nameKH,
    username,
    dob,
    gender,
    email,
    password,
  };

  registeredUsers.push(userData);
  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  localStorage.setItem("registeredUser", JSON.stringify(userData));
  localStorage.setItem("registerData", JSON.stringify(userData));

  message.textContent = `Thanks, ${username}! Registration complete. Redirecting to login...`;
  message.className = "message success";
  message.hidden = false;
  form.reset();

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1200);
});
