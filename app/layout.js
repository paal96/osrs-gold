import '../styles/globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBar from '../components/TopBar';

export const metadata = {
  title: 'OSRS Gold Shop',
  description: 'Buy cheap and fast OSRS gold with secure transactions and 24/7 support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
