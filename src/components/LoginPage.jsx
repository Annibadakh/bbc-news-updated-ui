import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bbclogo from '../assets/bbclogo.png';
import { CheckCircle } from 'lucide-react';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a login API call (you can replace this with an actual login request)
    const userData = { email, password };
    console.log('Logged in user:', userData);
    setLoggedIn(true);

    // Delay animation (like PhonePe style)
    setTimeout(() => {
      setLoggedIn(false);
      navigate("/"); // Redirect to the home page
    }, 3000); // Allow animation before redirect
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 transition-all duration-700"
>
      <button
        className="absolute top-4 left-4 text-xl text-white px-4 py-1 border border-blue-600 rounded-full bg-blue-600 hover:text-gray-800 hover:bg-white transition-colors duration-300"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <div className="w-full max-w-xl p-8 bg-white rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={bbclogo} alt="logo" className="h-12" />
        </div>

        {/* Login Form */}
        <div className={`animate-fade-in scale-100 transition-transform duration-500 ease-in-out ${loggedIn ? 'blur-sm' : ''}`}>
          <h2 className="text-2xl font-bold text-indigo-700">Login to Your Account</h2>
          <p className="text-gray-600">Enter your email address and password to login</p>

          <input
            type="email"
            className="w-full border border-indigo-200 focus:border-indigo-500 rounded-lg px-4 py-2 transition-all duration-300 shadow-sm my-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />

          <input
            type="password"
            className="w-full border border-indigo-200 focus:border-indigo-500 rounded-lg px-4 py-2 transition-all duration-300 shadow-sm my-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-2 rounded-xl shadow-md transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <span
                className="text-indigo-500 cursor-pointer hover:text-indigo-600 font-semibold"
                onClick={() => navigate("/register")}
              >
                Register here
              </span>
            </p>
          </div>
        </div>

        {/* Success Animation Overlay */}
        {loggedIn && (
          <div className="absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center animate-fade-in">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center animate-bounce">
                <CheckCircle size={50} className="text-white" />
              </div>
              <p className="text-xl font-semibold text-green-600 animate-pulse">Login Successful!</p>
              <p className="text-sm text-gray-600 mt-1">Redirecting to Home...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
