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
          placeholder="example@email.com"
          autoComplete="off"
          {...register("email", {
            required: "Email is mandatory",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email"
            },
            validate: {
              noSpaces: (value) =>
                !/\s/.test(value) || "The email must not contain spaces",
              validDomain: (value) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|info|io|co|es|mx)$/i.test(value) ||
                "The domain is invalid",
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password   </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
          {...register("password", {
            required: "Password is mandatory",
            minLength: {
              value: 8,
              message: "Must be at least 8 characters long"
            },
            maxLength: {
              value: 20,
              message: "Must be less than 20 characters long"
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: "Must contain at least one uppercase letter, one number and one special character"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default login;
