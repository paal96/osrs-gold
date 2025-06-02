export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <div className="flex justify-center py-10">
          <img
            src="/ChatGPT Image 2. juni 2025, 04_26_52.png"
            alt="Banner"
            className="max-w-md h-auto rounded-lg shadow-lg opacity-0 animate-fadeIn"
            style={{ animationFillMode: "forwards", animationDuration: "2s" }}
          />
        </div>
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
