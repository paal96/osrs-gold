import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Banner */}
      <section className="bg-[url('https://www.runescape.com/img/rsp777/bg-goldpile.jpg')] bg-cover bg-center text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Buy OSRS Gold – Fast & Cheap</h1>
        <p className="text-xl max-w-2xl mx-auto text-yellow-200 drop-shadow">Get Old School RuneScape gold delivered within minutes. Safe trades, real players, no bans.</p>
        <a
          href="https://discord.gg/yourdiscord" // <-- Endre til din faktiske Discord
          className="mt-8 inline-block bg-yellow-400 text-black text-lg font-bold px-6 py-3 rounded-xl shadow hover:bg-yellow-500 transition"
        >
          Contact on Discord
        </a>
      </section>

      {/* Price Table */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Choose Your Gold Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[{amount: '10M', price: '€2.99'}, {amount: '50M', price: '€13.99'}, {amount: '100M', price: '€26.99'}].map(pkg => (
            <div key={pkg.amount} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{pkg.amount} OSRS Gold</h3>
              <p className="text-yellow-400 text-lg mb-4">{pkg.price}</p>
              <a
                href="https://discord.gg/yourdiscord"
                className="inline-block bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Buy From Us?</h2>
        <ul className="max-w-3xl mx-auto text-left text-lg space-y-4 text-gray-300">
          <li>✅ Instant delivery (usually within 5–10 minutes)</li>
          <li>✅ Trusted by hundreds of OSRS players</li>
          <li>✅ Safe trades using mule accounts</li>
          <li>✅ Manual delivery – no bots</li>
          <li>✅ Live Discord support</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 bg-black">
        <p>© 2025 OSRS-Gold. All rights reserved.</p>
        <p>Discord: GoldSeller#1234</p>
      </footer>
    </main>
  );
}
