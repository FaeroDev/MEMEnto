const loginForm = async (event) => {
  const email = document.getElementById("login-email");
  const password = document.getElementById("login-password");

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      return "Failed to log in";
    }
  }
};

const signupForm = async (event) => {
  event.preventDefault();

  const username = document.getElementById("signup-username");
  const email = document.getElementById("signup-email");
  const password = document.getElementById("signup-password");

  if (username && email && password) {
    const response = await fetch("/api/user-routes", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Sign up failed.");
    }
  }
};

document.getElementById("login-form").addEventListener("submit", loginForm);

document.getElementById("signup-form").addEventListener("submit", signupForm);
