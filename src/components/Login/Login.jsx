import "./Login.css";

const login = () => {
    return (
       <form action="" className="formLogin">
            <label htmlFor="Gmail">Gmail</label>
            <input type="text" className="inputGmail" required/>   
            <label htmlFor="Contraseña">Contraseña</label>
            <input type="text" className="inputContraseña" required/>
            <button type="submit" className="btnLogin">Iniciar Sesión</button>
       </form>   
    );
  };
  
  export default login;
  