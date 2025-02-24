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
            <label htmlFor="nombre">Nombre </label>
            <input
                id="nombre"
                type="text"
                placeholder="Ingresa tu nombre"
                {...register("nombre", {
                    required: "El nombre es obligatorio",
                    pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]+$/,
                    message: "El nombre solo puede contener letras y espacios",
                    },
                    maxLength: {
                    value: 50,
                    message: "El nombre no puede exceder los 50 caracteres",
                    },
                })}
            />
            {errors.nombre && <p>{errors.nombre.message}</p>} 
        </div> 

        <div>
            <label htmlFor="apellidos">Apellidos </label>
            <input
                id="apellidos"
                type="text"
                placeholder="Ingresa tus apellidos"
                {...register("apellidos", {
                    required: "Los apellidos son obligatorios",
                    pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]+$/,
                    message: "Los apellidos solo pueden contener letras y espacios",
                    },
                    maxLength: {
                    value: 100,
                    message: "Los apellidos no pueden exceder los 100 caracteres",
                    },
                })}
            />
            {errors.apellidos && <p>{errors.apellidos.message}</p>}      
        </div> 

        <div>
            <label htmlFor="genero">Género </label>
            <select {...register("genero", { required: "Selecciona tu género" })}>
                <option value="">Selecciona</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
            </select>
            {errors.genero && <p>{errors.genero.message}</p>}       
        </div>

        <div>
            <label htmlFor="documento">Documento </label>
            <input
                id="documento"
                type="text"
                placeholder="DNI / NIE / Pasaporte"
                autoComplete="off"
                {...register("documento", {
                required: "El documento es obligatorio",
                pattern: {
                    value: /^(?:\d{8}[A-Z]|[XYZ]\d{7}[A-Z])$/,
                    message: "DNI/NIE inválido"
                }
                })}
            />
            {errors.documento && <p>{errors.documento.message}</p>}
        </div>         

        <div>
            <label htmlFor="fechaNacimiento">Fecha de nacimiento </label>
            <input
                id="fechaNacimiento"
                type="date"
                {...register("fechaNacimiento", {
                required: "La fecha de nacimiento es obligatoria",
                validate: (value) => {
                    const fechaNacimiento = new Date(value);
                    const hoy = new Date();
                    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
                    return edad >= 18 || "Debes ser mayor de 18 años";
                }
                })}
            />
            {errors.fechaNacimiento && <p>{errors.fechaNacimiento.message}</p>}         
        </div> 

        <div>
            <label htmlFor="telefono">Teléfono </label>
            <input
                id="telefono"
                type="tel"
                placeholder="Ej: +34612345678"
                autoComplete="off"
                {...register("telefono", {
                required: "El número de teléfono es obligatorio",
                pattern: {
                    value: /^\+?\d{9,15}$/,
                    message: "Número inválido. Formato esperado: +34XXXXXXXXX"
                }
                })}
            />
            {errors.telefono && <p>{errors.telefono.message}</p>}
        </div>

        <div>
            <label htmlFor="direccion">Dirección </label>
            <input
                id="direccion"
                type="text"
                placeholder="Tu dirección (opcional)"
                {...register("direccion")}
            />
        </div>

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
            <label htmlFor="contraseña">Contraseña</label>
            <input
                id="contraseña"
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

        <div>
            <label htmlFor="repetirContraseña">Repite tu contraseña</label>
            <input
                id="repetirContraseña"
                type="password"
                placeholder="Repite tu contraseña"
                autoComplete="off"
                {...register("repeatPassword", {
                    required: "Es necesario repetir la contraseña",
                    validate: (value) =>
                        value === watch("contraseña") || "Las contraseñas no coinciden",  
                })}
            />
            {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
        </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default SignIn;

