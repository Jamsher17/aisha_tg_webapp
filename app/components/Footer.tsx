"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import userIcon from "@/public/user.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div className="fixed bottom-0 w-full bg-orange-300 h-20 flex justify-around items-center px-6">
      <button
        className={`flex flex-col items-center ${
          currentPath === "/profile" ? "bg-beige" : "bg-black"
        } px-4 py-2 rounded`}
        style={{
          color: "var(--background)",
        }}
      >
        <Image src={userIcon} alt="User" className="w-6" />
        <Link href="/profile">Profile</Link>
      </button>

      <button
        className={`flex flex-col items-center ${
          currentPath === "/" ? "bg-white" : "bg-transparent"
        } px-4 py-2 rounded`}
        style={{
          color: "var(--background)",
        }}
      >
        <Image src={userIcon} alt="User" className="w-6" />
        <Link href="/">Main</Link>
      </button>

      <button
        className={`flex flex-col items-center ${
          currentPath === "/cart" ? "bg-white" : "bg-transparent"
        } px-4 py-2 rounded`}
        style={{
          color: "var(--background)",
        }}
      >
        <Image src={userIcon} alt="User" className="w-6" />
        <Link href="/cart">Cart</Link>
      </button>
    </div>
  );
};

export default Footer;
