import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4 py-10">
      <Image src="/logo.png" alt="DigiMart Logo" width={300} height={300} />
      <h1 className="text-4xl mt-6 font-bold">Selamat Datang di DigiMart</h1>
      <p className="mt-4 text-gray-400">Pilih produk yang ingin kamu beli</p>
      <div className="mt-6 flex gap-4">
        <Link href="/panel"><button className="bg-blue-600 px-6 py-2 rounded">Beli Panel</button></Link>
        <Link href="/nokos"><button className="bg-pink-600 px-6 py-2 rounded">Beli NOKOS</button></Link>
      </div>
    </main>
  );
}