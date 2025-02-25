import './SignIn.css';
import React from "react";
import { useForm } from "react-hook-form";

function SignIn() {
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
            <label htmlFor="name">Name </label>
            <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                    required: "Name is required",
                    pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]+$/,
                    message: "Name can only contain letters and spaces",
                    },
                    maxLength: {
                    value: 50,
                    message: "Name cannot exceed 50 characters",
                    },
                })}
            />
            {errors.name && <p>{errors.name.message}</p>} 
        </div> 

        <div>
            <label htmlFor="lastName">Last Name </label>
            <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                {...register("lastName", {
                    required: "Last name is required",
                    pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]+$/,
                    message: "Last name can only contain letters and spaces",
                    },
                    maxLength: {
                    value: 100,
                    message: "Last name cannot exceed 100 characters",
                    },
                })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}      
        </div> 

        <div>
            <label htmlFor="gender">Gender </label>
            <select {...register("gender", { required: "Select your gender" })}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            {errors.gender && <p>{errors.gender.message}</p>}       
        </div>

        <div>
            <label htmlFor="document">Document </label>
            <input
                id="document"
                type="text"
                placeholder="DNI / NIE / Passport"
                autoComplete="off"
                {...register("document", {
                required: "Document is required",
                pattern: {
                    value: /^(?:\d{8}[A-Z]|[XYZ]\d{7}[A-Z])$/,
                    message: "Invalid DNI/NIE"
                }
                })}
            />
            {errors.document && <p>{errors.document.message}</p>}
        </div>         

        <div>
            <label htmlFor="birthDate">Date of Birth </label>
            <input
                id="birthDate"
                type="date"
                {...register("birthDate", {
                required: "Date of birth is required",
                validate: (value) => {
                    const birthDate = new Date(value);
                    const today = new Date();
                    const age = today.getFullYear() - birthDate.getFullYear();
                    return age >= 18 || "You must be over 18 years old";
                }
                })}
            />
            {errors.birthDate && <p>{errors.birthDate.message}</p>}         
        </div> 

        <div>
            <label htmlFor="phone">Phone </label>
            <input
                id="phone"
                type="tel"
                placeholder="Eg: +34612345678"
                autoComplete="off"
                {...register("phone", {
                required: "Phone number is required",
                pattern: {
                    value: /^\+?\d{9,15}$/,
                    message: "Invalid number. Expected format: +34XXXXXXXXX"
                }
                })}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div>
            <label htmlFor="address">Address </label>
            <input
                id="address"
                type="text"
                placeholder="Your address (optional)"
                {...register("address")}
            />
        </div>

        <div>
            <label htmlFor="email">Email </label>
            <input
                id="email"
                type="email"
                placeholder="example@email.com"
                autoComplete="off"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email"
                    },
                    validate: {
                    noSpaces: (value) =>
                        !/\s/.test(value) || "Email must not contain spaces",
                    validDomain: (value) =>
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|info|io|co|es|mx)$/i.test(value) ||
                        "Invalid domain",
                    }
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="off"
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Must be at least 8 characters"
                    },
                    maxLength: {
                        value: 20,
                        message: "Cannot exceed 20 characters"
                    },
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                        message: "Must include an uppercase letter, a number, and a symbol"
                    }
                })}
            />
            {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
            <label htmlFor="repeatPassword">Repeat your password</label>
            <input
                id="repeatPassword"
                type="password"
                placeholder="Repeat your password"
                autoComplete="off"
                {...register("repeatPassword", {
                    required: "You must repeat the password",
                    validate: (value) =>
                        value === watch("password") || "Passwords do not match",  
                })}
            />
            {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
        </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignIn;
