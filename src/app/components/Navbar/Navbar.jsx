import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="bg-purple-400 p-4 text-black">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <Image
                src="/pngwing.png"
                alt="rosa"
                width={50}
                height={50}
              />
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">
                    Psicologia
                  </Link>
                </li>
                <li>
                  <Link href="/Musicas">
                    Musicas
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

