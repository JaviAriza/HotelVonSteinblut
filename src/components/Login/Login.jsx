import "./Login.css";

const login = () => {
    return (
      <div>
         <form action="" className="loginForm">
            <label htmlFor="Email">Email</label>
            <input type="text" className="inputGmail" required/>   
            <label htmlFor="Contraseña">Contraseña</label>
            <input type="text" className="inputContraseña" required/>
            <button type="submit" className="btnLogin">Iniciar Sesión</button>
       </form>   
       <p id="error"></p>
      </div>
       
    );
  };
  
   document.getElementById("loginForm").addEventListener("submit", function(event){
       event.preventDefault();
       const email = document.getElementById("inputGmail").value;
       const contraseña = document.getElementById("inputContraseña").value;
       const error = document.getElementById("error");

       if(!email.includes("@")){
           error.textContent = "Correo inválido";
   });

  export default login;
  