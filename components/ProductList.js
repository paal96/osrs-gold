export default function ProductList() {
  const products = [
    { id: 1, name: '100M OSRS Gold', price: '$20.00' },
    { id: 2, name: '200M OSRS Gold', price: '$38.00' },
    { id: 3, name: '500M OSRS Gold', price: '$90.00' },
  ];

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 shadow rounded">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
