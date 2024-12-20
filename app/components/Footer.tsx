"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import userIcon from "@/public/user.png";
import cartIcon from "@/public/shopping-bag.png";
import homeIcon from "@/public/home-button.png";

const Footer = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div className="fixed bottom-0 w-full bg-orange-300 h-20 flex justify-around items-center px-6">
      <Link
        href="/profile"
        className={`text-black flex flex-col items-center ${
          currentPath === "/profile" ? "bg-white" : "bg-transparent"
        } px-4 py-2 rounded`}
      >
        <Image src={userIcon} alt="User" className="w-6" />
        Profile
      </Link>

      <Link
        href="/"
        className={`text-black flex flex-col items-center ${
          currentPath === "/" ? "bg-white" : "bg-transparent"
        } px-4 py-2 rounded`}
      >
        <Image src={homeIcon} alt="Menu" className="w-6" />
        Menu
      </Link>

      <Link
        href="/cart"
        className={`text-black flex flex-col items-center ${
          currentPath === "/cart" ? "bg-white" : "bg-transparent"
        } px-4 py-2 rounded`}
      >
        <Image src={cartIcon} alt="Cart" className="w-6" />
        Cart
      </Link>
    </div>
  );
};

export default Footer;
