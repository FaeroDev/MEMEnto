const loginForm = async (event) => {
  event.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setTimeout(function () {   //WE NEED THIS FOR A 1 second DELAY
        document.location = "/";
      }, 1000);

      // alert('LOGGED IN')
      // document.location = ("/");
    } else {
      alert("Epic Fail");
    }
  }
};

const signupForm = async (event) => {
  event.preventDefault();

  const username = document.getElementById("signup-username").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Successfully created user, please log in")
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById("login-form").addEventListener("submit", loginForm);

document.getElementById("signup-form").addEventListener("submit", signupForm);
