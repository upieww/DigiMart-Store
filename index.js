
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [language, setLanguage] = useState("id");

  const texts = {
    id: {
      welcome: "Selamat datang di DigiMart",
      description: "Pilih kategori produk digital kamu: Panel Pterodactyl atau NOKOS siap pakai.",
      panel: "🎛️ Beli Panel",
      nokos: "📱 Beli NOKOS",
    },
    code: {
      welcome: "<div class='dm-welcome'>DigiMart.init();</div>",
      description: "<div class='dm-desc'>select('NOKOS' || 'PANEL').buy();</div>",
      panel: "<button>Buy('Panel')</button>",
      nokos: "<button>Buy('NOKOS')</button>",
    },
  };

  const t = texts[language];

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <div className="flex justify-end pr-4">
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-gray-800 text-white px-2 py-1 rounded-md">
          <option value="id">Bahasa Indonesia</option>
          <option value="code">Code Lang</option>
        </select>
      </div>

      <div className="flex flex-col items-center text-center">
        <Image src="/logo.png" alt="DigiMart Logo" width={300} height={300} className="rounded-xl shadow-lg" />
        <h1 className="text-4xl font-bold mt-6">
          <span dangerouslySetInnerHTML={{ __html: t.welcome }} />
        </h1>
        <p className="text-lg mt-4 text-gray-300" dangerouslySetInnerHTML={{ __html: t.description }} />

        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <Link href="/panel">
            <Button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl">{t.panel}</Button>
          </Link>
          <Link href="/nokos">
            <Button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 rounded-xl">{t.nokos}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
