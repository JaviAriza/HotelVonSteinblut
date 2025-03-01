import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  };

  const validateName = (name) => {
    return /^[a-zA-ZÀ-ÿ\s]+$/.test(name) && name.length <= 50;
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Invalid email format');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password must include an uppercase letter, a number, and a symbol');
      return;
    }
    console.log('Login - Email:', email);
    console.log('Login - Password:', password);
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (!validateName(firstName)) {
      alert('First name can only contain letters and must not exceed 50 characters');
      return;
    }
    if (!validateName(lastName)) {
      alert('Last name can only contain letters and must not exceed 50 characters');
      return;
    }
    if (!validateEmail(email)) {
      alert('Invalid email format');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password must include an uppercase letter, a number, and a symbol');
      return;
    }
    console.log('Register - First Name:', firstName);
    console.log('Register - Last Name:', lastName);
    console.log('Register - Email:', email);
    console.log('Register - Password:', password);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="relative w-96 h-[28rem]"> 
        {/* Card Container */}
        <div
          className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Side (Login) */}
          <div
            className="absolute w-full h-full bg-gradient-to-b from-red-800 to-black p-8 rounded-lg shadow-lg border-red-900 border-2"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white text-center">Login</h2>
            <form onSubmit={handleSubmitLogin}>
              <div className="mb-4">
                <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  style={{ backgroundColor: 'white' }}
                  id="email"
                  className="w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  style={{ backgroundColor: 'white' }}
                  id="password"
                  className="w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <a
                href="#forgot-password"
                className="text-sm text-gray-300 hover:text-red-500 transition duration-300"
              >
                Forgot your password?
              </a>
            </div>
            <div className="mt-2 text-center">
              <span className="text-sm text-gray-300">Don't have an account? </span>
              <span
                onClick={handleFlip}
                className="text-sm text-red-500 hover:text-white transition duration-300 cursor-pointer"
              >
                Sign up
              </span>
            </div>
          </div>
          {/* Back Side (Register) */}
          <div
            className="absolute w-full h-[550px] bg-gradient-to-b from-red-800 to-black p-8 rounded-lg shadow-lg border-red-900 border-2"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white text-center">Register</h2>
            <form onSubmit={handleSubmitRegister}>
              <div className="mb-4">
                <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  style={{ backgroundColor: 'white' }}
                  id="firstName"
                  className="w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  style={{ backgroundColor: 'white' }}
                  id="lastName"
                  className="w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  style={{ backgroundColor: 'white' }}
                  id="email"
                  className="w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  style={{ backgroundColor: 'white' }}
                  id="password"
                  className="w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-2 text-center">
              <span className="text-sm text-gray-300">Already have an account? </span>
              <span
                onClick={handleFlip}
                className="text-sm text-red-500 hover:text-white transition duration-300 cursor-pointer"
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
