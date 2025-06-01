import '../styles/globals.css';

export const metadata = {
  title: 'OSRS Gold Shop',
  description: 'Buy cheap and fast OSRS gold.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
