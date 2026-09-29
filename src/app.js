// Entry point for the app

const loginForm = document.getElementById("login-form");
const messageEl = document.getElementById("login-message");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      messageEl.textContent = "Please fill in all fields.";
      return;
    }

    // Frontend-only demo — no backend. Log the email for now.
    console.log("Login submitted:", email);
    messageEl.textContent = `Logged in as ${email} (demo only).`;

    loginForm.reset();
  });
}