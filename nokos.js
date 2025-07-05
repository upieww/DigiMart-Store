export default function NokosPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-4">List Produk NOKOS</h2>
      <ul className="space-y-3">
        <li className="bg-gray-800 p-3 rounded">NOKOS Indo Fresh - Rp5.000</li>
        <li className="bg-gray-800 p-3 rounded">Save Indo +62 - Stok terbatas</li>
        <li className="bg-gray-800 p-3 rounded">Save Filipina, Rusia, Amerika (jika tersedia)</li>
      </ul>
    </div>
  );
}