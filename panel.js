
export default function PanelPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-4">Beli Panel</h2>
      <form className="space-y-4">
        <input placeholder="Nama" className="w-full p-2 rounded bg-gray-800 text-white" />
        <input placeholder="Nomor WhatsApp" className="w-full p-2 rounded bg-gray-800 text-white" />
        <select className="w-full p-2 rounded bg-gray-800 text-white">
          <option>Pilih Paket Panel</option>
          <option>1GB - Rp1.000</option>
          <option>10GB - Rp10.000</option>
          <option>Unlimited - Rp15.000</option>
        </select>
        <button className="w-full bg-green-600 py-2 rounded">Kirim</button>
      </form>
    </div>
  );
}
