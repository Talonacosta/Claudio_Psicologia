import React from "react";
import Image from "next/image";
import Link from "next/link";

const Musicas = () => {
  return (
    <div>
      <header>
        <div className="bg-orange-400 p-4 text-black">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <Image src="/pngwing.png" alt="rosa" width={50} height={50} />
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">Psicologia</Link>
                </li>
                <li>
                  <Link href="/Musicas">Musicas</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
<div className="bg-orange-200" >
      <h1 className="text-4xl font-bold text-center">Claudio Framone</h1>
      <h2 className="text-lg mt-8">Cantor - Composito</h2>
      <p className="text-gray-700 mt-8">Animamos seu evento com apresentaçoes musicais de alto nível</p>
      <h3 className="text-2xl font-semibold mt-8">
        Para agendar uma consulta ou obter mais informações, entre em contato
        por:
      </h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>(31) 991066-0339</li>
        <li>(31) 98977-8347</li>
        <li>e-mail claudioframone@.com</li>
      </ul>
    </div>
    </div>
  );
};

export default Musicas;
