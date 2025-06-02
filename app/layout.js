export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col">
        {/* Banner med fade-in */}
        <div className="flex justify-center py-10">
          <img
            src="/banner.png"
            alt="Banner"
            className="max-w-md h-auto rounded-lg shadow-lg opacity-0 animate-fadeIn"
            style={{ animationFillMode: "forwards", animationDuration: "2s" }}
          />
        </div>

        {/* Hovedinnhold */}
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
