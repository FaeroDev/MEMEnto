const loginForm = async (event) => {
    event.preventDefault();


    const email = //Route to where the email info will be inputed and saved into local storage;
    const password = // Route to where the password will be inputed and saved into local storage;

    if (email && password) {
        const response = await fetch (//'wherever the route for the login is',{
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},.
        });
        
        if (response.ok){
            document.location.replace('/');
        } else {
            return('Failed to log in');
        }
    }
};

const signupForm = async (event) => {
    event.preventDefault();
  
    const username = // Route to where the username will be inputed and saved into local storage;
    const email = //Route to where the email info will be inputed and saved into local storage;
    const password = // Route to where the password will be inputed and saved into local storage;
  
    if (username && email && password) {
      const response = await fetch(// wherever route for user is {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
  .querySelector(// tag for login button)
  .addEventListener('submit', loginForm);

document
  .querySelector(// tag for signup button)
  .addEventListener('submit', signupForm);