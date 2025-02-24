import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

function login() {
  const {
    register,
    handleSubmit, 
    formState: { errors }, 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email   </label>
        <input
          id="email"
          type="email"
          placeholder="ejemplo@correo.com"
          autoComplete="off"
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Ingrese un correo válido"
            },
            validate: {
              noSpaces: (value) =>
                !/\s/.test(value) || "El correo no debe contener espacios",
              validDomain: (value) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|info|io|co|es|mx)$/i.test(value) ||
                "El dominio no es válido",
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contraseña">contraseña   </label>
        <input
          id="password"
          type="password"
          placeholder="Ingresa tu contraseña"
          autoComplete="off"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 8,
              message: "Debe tener al menos 8 caracteres"
            },
            maxLength: {
              value: 20,
              message: "No debe superar los 20 caracteres"
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: "Debe incluir una mayúscula, un número y un símbolo"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default login;
