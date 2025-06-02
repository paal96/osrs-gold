export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center py-10">
      <img
        src="/banner.png"
        alt="Banner"
        className="max-w-full h-auto rounded-lg shadow-lg mb-10"
      />
      {/* Her kan du legge inn mer innhold under banneret */}
    </div>
  );
}
