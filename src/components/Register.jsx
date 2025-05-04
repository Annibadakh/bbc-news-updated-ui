import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import EmailPage from './EmailPage';
import PasswordPage from './PasswordPage';
import DetailsPage from './DetailsPage';
import LoginPage from './LoginPage';
import bbclogo from '../assets/bbclogo.png';
import { CheckCircle } from 'lucide-react';

function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [emailsPreference, setEmailsPreference] = useState(null);
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    const userData = { email, password, dob, emailsPreference };
    console.log('Registered user:', userData);
    setRegistered(true);

    // Delay animation (like PhonePe style)
    setTimeout(() => {
      setRegistered(false);
      navigate("/login");
    }, 3000); // Allow animation before redirect
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white p-4 transition-all duration-700">
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

        {/* Form Pages */}
        <div className={`animate-fade-in scale-100 transition-transform duration-500 ease-in-out ${registered ? 'blur-sm' : ''}`}>
          {step === 1 && <EmailPage email={email} setEmail={setEmail} next={() => setStep(2)} />}
          {step === 2 && <PasswordPage email={email} password={password} setPassword={setPassword} back={() => setStep(1)} next={() => setStep(3)} />}
          {step === 3 && (
            <DetailsPage
              dob={dob}
              setDob={setDob}
              preference={emailsPreference}
              setPreference={setEmailsPreference}
              back={() => setStep(2)}
              register={handleRegister}
            />
          )}
          {step === 4 && <LoginPage />}
        </div>

        {/* Success Animation Overlay */}
        {registered && (
          <div className="absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center animate-fade-in">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center animate-bounce">
                <CheckCircle size={50} className="text-white" />
              </div>
              <p className="text-xl font-semibold text-green-600 animate-pulse">Registration Successful!</p>
              <p className="text-sm text-gray-600 mt-1">Redirecting to login...</p>
            </div>
          </div>
        )}

        {/* Link to Login Page */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Have an account?{" "}
            <span
              className="text-indigo-500 cursor-pointer hover:text-indigo-600 font-semibold"
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
