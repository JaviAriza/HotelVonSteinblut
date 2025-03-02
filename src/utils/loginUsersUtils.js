export const handleSubmitLogin = async (e, email, password) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.email === email);

  if (user && user.password === password) {
    console.log('Login successful from localStorage');
    window.location.href = '/profile';
  } else {
    console.log('Invalid credentials or user not found');
    alert('Invalid credentials');
  }
};
