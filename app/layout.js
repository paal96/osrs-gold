export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <div className="flex justify-center py-10">
          <img
            src="/banner.png"
            alt="Banner"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
