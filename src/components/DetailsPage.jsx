function DetailsPage({ dob, setDob, preference, setPreference, back, register }) {
    return (
      <div className="space-y-6 animate-fade-in">
        <button className="text-sm text-gray-500 hover:text-gray-800 transition-colors duration-300" onClick={back}>← Back</button>
        <h2 className="text-2xl font-bold text-indigo-700">Enter your details</h2>
        <label className="block text-gray-600">Date of birth (e.g. 18 03 2002)</label>
        <input
          type="text"
          className="w-full border border-indigo-200 focus:border-indigo-500 rounded-lg px-4 py-2 transition-all duration-300 shadow-sm"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder="DD MM YYYY"
        />
  
        <p className="text-sm text-gray-600">Would you like to receive emails from the BBC, personalised for you?</p>
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-700">
            <input
              type="radio"
              name="emails"
              value="yes"
              checked={preference === 'yes'}
              onChange={() => setPreference('yes')}
              className="mr-2"
            />
            Yes, I want emails
          </label>
          <label className="text-sm text-gray-700">
            <input
              type="radio"
              name="emails"
              value="no"
              checked={preference === 'no'}
              onChange={() => setPreference('no')}
              className="mr-2"
            />
            No thanks
          </label>
        </div>
  
        <p className="text-xs text-gray-500">
          By clicking Register, you accept our Terms of Use. Find out about our Privacy and Cookies Policy.
        </p>
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition duration-300 shadow-md"
          onClick={register}
        >
          Register
        </button>
      </div>
    );
  }
  
  export default DetailsPage;
  