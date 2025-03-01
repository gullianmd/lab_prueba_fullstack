"use client";

import Link from "next/link";

export default function NavVar() {

  return (
    <nav className="bg-red-700 border-gray-400 mb-2">
      <div className="flex justify-center p-1">

        <SmMenu />

        <MdMenu />

        <XlMenu />

      </div>
    </nav>
  );
}

function SmMenu() {
  return (
    <div className="flex md:hidden items-center justify-between w-full">
      <ul className="font-normal text-sm text-white flex flex-row">
        <li>
          <Link href={"/"} className="block py-1 px-2">Home</Link>
        </li>
      </ul>
      <div className="ml-auto font-medium text-base text-white">
        <span className="block py-1 px-2">Prueba Microsystem - Gullian Mardones</span>
      </div>
    </div>
  );
}

function MdMenu() {
  return (
    <div className="hidden md:flex xl:hidden items-center justify-between w-full">
      <ul className="font-medium text-base text-white flex flex-row text">
        <li>
          <Link href={"/"} className="block py-1 px-2">Home</Link>
        </li>
      </ul>
      <div className="ml-auto font-medium text-base text-white">
        <span className="block py-1 px-2">Prueba Microsystem - Gullian Mardones</span>
      </div>
    </div>
  );
}

function XlMenu() {
  return (
    <div className="hidden xl:flex items-center justify-between w-full">
      <ul className="font-medium text-base text-white flex flex-row items-center justify-center space-x-4">
        <li>
          <Link href={"/"} className="block py-1 px-2">Home</Link>
        </li>
      </ul>
      <div className="ml-auto font-medium text-base text-white">
        <span className="block py-1 px-2">Prueba Microsystem - Gullian Mardones</span>
      </div>
    </div>

  );
}
