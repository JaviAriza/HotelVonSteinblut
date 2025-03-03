
export const registerUser = (userData) => {
    const { firstName, lastName, email, password } = userData;
    
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(firstName) || firstName.length > 50) {
      alert('First name must contain only letters and not exceed 50 characters');
      return;
    }
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(lastName) || lastName.length > 50) {
      alert('Last name must contain only letters and not exceed 50 characters');
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert('Invalid email format');
      return;
    }
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
      alert('Password must include an uppercase letter, a number, and a symbol');
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.some(user => user.email === email)) {
      alert('Email already registered. Try logging in.');
      return;
    }
  
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      bookings: []
    };
  
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Registration successful! You can now log in.');
  };
  