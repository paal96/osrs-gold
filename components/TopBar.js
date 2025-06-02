export default function TopBar() {
  return (
    <div className="bg-yellow-500 text-gray-900 text-sm py-2 px-4 flex justify-between items-center">
      <span className="font-semibold">
        🎉 Use code <strong>OSRS10</strong> for 10% OFF – Fast Delivery!
      </span>
      <div className="space-x-4 text-xs">
        <select className="bg-yellow-500 focus:outline-none">
          <option>EN</option>
          <option>NO</option>
        </select>
        <select className="bg-yellow-500 focus:outline-none">
          <option>USD $</option>
          <option>EUR €</option>
          <option>NOK kr</option>
        </select>
      </div>
    </div>
  );
}
