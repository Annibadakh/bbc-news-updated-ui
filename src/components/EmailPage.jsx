function EmailPage({ email, setEmail, next }) {
    return (
      <div className="space-y-6 animate-fade-in">
        {/* <button className="text-sm text-gray-500 hover:text-gray-800 transition-colors duration-300">← Back</button> */}
        <h2 className="text-2xl font-bold text-indigo-700">Enter your email address</h2>
        <p className="text-gray-600">You must be 18 or over to register for a BBC account</p>
        <input
          type="email"
          className="w-full border border-indigo-200 focus:border-indigo-500 rounded-lg px-4 py-2 transition-all duration-300 shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <button
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-2 rounded-xl shadow-md transition duration-300"
          onClick={next}
        >
          Continue
        </button>
      </div>
    );
  }
  
  export default EmailPage;