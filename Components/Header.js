import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="bg-orange-500 w-1000 h-32 text-center flex justify-center text-xl">
        <div className="w-1/2 bg-red-900 flex justify-start px-28 items-center text-white">
          LOGO
        </div>
        <div className="w-1/2 bg-red-700 flex justify-evenly items-center text-white">
          <Link href="/About">About</Link>
          <Link href="/Product">Product</Link>
          <Link href="/Services">Services</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
