import React from "react";
import Image from "next/image";
import notificationIcon from "@/public/notification.png";
import aishaIcon from "@/public/aishaIcon.png";

const Header = () => {
  return (
    <div
      style={{ height: "4.5rem" }}
      className="bg-orange-300 pt-6 flex justify-between px-4"
    >
      <div className="bg-transparent w-8 h-8"></div>
      <div>
        <Image
          src={aishaIcon}
          alt="Aisha"
          className="rounded-full"
          width={90}
        />
      </div>

      <button className="w-8 h-8 flex justify-center items-center">
        <Image
          src={notificationIcon}
          alt="Notification"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default Header;
