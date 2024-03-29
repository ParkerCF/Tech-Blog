
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    console.log(response.ok)

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
