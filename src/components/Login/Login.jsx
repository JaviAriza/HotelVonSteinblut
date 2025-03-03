import { useState } from 'react';
import { registerUser } from '../../utils/registerUsersUtils';
import { handleSubmitLogin } from '../../utils/loginUsersUtils'; 
import { useIsLoggedIn } from '../../hooks/useIsLoggedIn';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const { setIsLoggedIn } = useIsLoggedIn();

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    registerUser({ firstName, lastName, email, password });
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="relative w-88 h-[28rem]"> 
        <div
          className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="absolute w-full h-full bg-gradient-to-b from-red-800 to-black p-8 rounded-lg shadow-lg border-red-900 border-2"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white text-center">Login</h2>
            <form onSubmit={(e) => handleSubmitLogin(e, email, password, setIsLoggedIn)}>
              <div className="mb-4">
                <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-white w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
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
                  id="password"
                  className="bg-white w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Sign In
              </button>
            </form>
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
          <div
            className="absolute w-full h-[34rem] bg-gradient-to-b from-red-800 to-black p-8 rounded-lg shadow-lg border-red-900 border-2"
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
                  id="firstName"
                  className="bg-white w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
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
                  id="lastName"
                  className="bg-white w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
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
                  id="email"
                  className="bg-white w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
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
                  id="password"
                  className="bg-white w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
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
