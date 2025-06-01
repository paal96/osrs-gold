import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">OSRS Gold Shop</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
