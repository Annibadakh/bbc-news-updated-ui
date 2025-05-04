import { useState, useEffect } from 'react';

function PasswordPage({ email, password, setPassword, back, next }) {
  const [show, setShow] = useState(false);
  const [requirements, setRequirements] = useState({
    length: false,
    letter: false,
    numberSymbol: false,
  });

  useEffect(() => {
    setRequirements({
      length: password.length >= 8,
      letter: /[a-zA-Z]/.test(password),
      numberSymbol: /[^a-zA-Z]/.test(password),
    });
  }, [password]);

  const valid = Object.values(requirements).every(Boolean);

  return (
    <div className="space-y-6 animate-fade-in">
      <button className="text-sm text-gray-500 hover:text-gray-800 transition-colors duration-300" onClick={back}>← Back</button>
      <h2 className="text-2xl font-bold text-indigo-700">Create your account password</h2>
      <div className="text-sm text-gray-600">Email: {email} <button className="text-blue-600 underline ml-2" onClick={back}>Edit</button></div>
      <ul className="text-sm">
        <li className={requirements.length ? 'text-green-600' : 'text-gray-600'}>✔ At least eight characters</li>
        <li className={requirements.letter ? 'text-green-600' : 'text-gray-600'}>✔ At least one letter</li>
        <li className={requirements.numberSymbol ? 'text-green-600' : 'text-gray-600'}>✔ At least one number or symbol</li>
      </ul>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          className="w-full border border-indigo-200 focus:border-indigo-500 rounded-lg px-4 py-2 transition-all duration-300 shadow-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="absolute right-3 top-2 text-sm text-blue-500" onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      <button
        className={`w-full py-2 rounded-xl text-white transition duration-300 shadow-md ${valid ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600' : 'bg-gray-300 cursor-not-allowed'}`}
        disabled={!valid}
        onClick={next}
      >
        Continue
      </button>
    </div>
  );
}

export default PasswordPage;