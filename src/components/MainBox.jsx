
export default function MainBox() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/020f/live/188fbec0-290e-11f0-8c66-ebf25fc2cfef.jpg.webp)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8">
        <div className="text-white max-w-2xl">
          <p className="text-red-500 font-bold text-lg">🔴 LIVE</p>
          <h2 className="text-3xl font-bold mb-2">
            Premier League: Palmer scores penalty as Chelsea beat Liverpool
          </h2>
          <p className="mb-4">
            Follow live text coverage as Brentford host Man Utd, Brighton face Newcastle United and West Ham play Spurs, before Chelsea v Liverpool.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}
