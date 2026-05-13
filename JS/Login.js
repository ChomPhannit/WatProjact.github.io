const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginForm.email.value.trim().toLowerCase();
  const password = loginForm.password.value;
  const registeredUsers =
    JSON.parse(localStorage.getItem("registeredUsers")) || [];

  if (!email || !email.includes("@") || !email.includes(".")) {
    loginMessage.textContent = "Please enter a valid email address.";
    loginMessage.className = "message error";
    loginMessage.hidden = false;
    return;
  }

  if (password.length < 6) {
    loginMessage.textContent = "Password must be at least 6 characters.";
    loginMessage.className = "message error";
    loginMessage.hidden = false;
    return;
  }

  if (registeredUsers.length === 0) {
    loginMessage.textContent = "No account found. Please register first.";
    loginMessage.className = "message error";
    loginMessage.hidden = false;
    return;
  }

  const user = registeredUsers.find(
    (user) => user.email === email && user.password === password,
  );
  if (!user) {
    loginMessage.textContent = "Email or password is incorrect.";
    loginMessage.className = "message error";
    loginMessage.hidden = false;
    return;
  }

  loginMessage.textContent = "Login successful! Redirecting...";
  loginMessage.className = "message success";
  loginMessage.hidden = false;
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  setTimeout(() => {
    window.location.href = "Dashboard.html";
  }, 1200);
  // Redirect after successful login
  // window.location.href = 'dashboard.html';
});
