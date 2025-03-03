import Swal from "sweetalert2";

export const handleSubmitLogin = async (e, email, password, setIsLoggedIn) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((user) => user.email === email);

  if (user && user.password === password) {
    setIsLoggedIn(true);
    Swal.fire({
      title: `Welcome, ${user}`,
      icon: "success",
      background: "#1e1e1e",
      color: "#ffffff",
      confirmButtonColor: "#ff4d4d",
      confirmButtonText: "Go to homepage",
    }).then(() => {
      window.location.href = "/";
    });
  } else {
    Swal.fire({
      title: "Invalid credentials",
      text: "The entered code is not valid.",
      icon: "error",
      background: "#1e1e1e",
      color: "#ffffff",
      confirmButtonColor: "#ff4d4d",
    });
  }
};
