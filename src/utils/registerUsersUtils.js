import Swal from 'sweetalert2';
export const registerUser = (userData) => {
  const { firstName, lastName, email, password } = userData;
  
  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(firstName) || firstName.length > 50) {
    Swal.fire({
      title: `First name must contain only letters and not exceed 50 characters`,
      icon: "error",
      background: "#1e1e1e",
      color: "#ffffff",
      confirmButtonColor: "#ff4d4d",
    })
    return;
  }
  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(lastName) || lastName.length > 50) {
    Swal.fire({
      title: `Last name must contain only letters and not exceed 50 `,
      icon: "error",
      background: "#1e1e1e",
      color: "#ffffff",
      confirmButtonColor: "#ff4d4d",
    })
    return;
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    Swal.fire({
      title: `Email format invalid`,
      icon: "error",
      background: "#1e1e1e",
      color: "#ffffff",
    });    return;
  }
  if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
    Swal.fire({
      title: `Password must include an uppercase letter, a number, and a symbol'`,
      icon: "error",
      background: "#1e1e1e",
      color: "#ffffff",
      confirmButtonColor: "#ff4d4d",
    })
    return;
  }

  const newUser = {
    firstName,
    lastName,
    email,
    password
  };

  localStorage.setItem('users', JSON.stringify([newUser])); 

  Swal.fire({
        title: `Registration successful! You can now log in`,
        icon: "success",
        background: "#1e1e1e",
        color: "#ffffff",
        confirmButtonColor: "#ff4d4d",
      })
};


