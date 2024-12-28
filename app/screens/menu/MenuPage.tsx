"use client";
import React, { useEffect, useState, useRef } from "react";
import menu, { menuSection } from "@/app/components/DummyData";
import SearchInput from "./SearchInput";
import Sections from "./Sections";
import MenuItem from "./MenuItem";

export interface cartItem {
  itemId: string;
  quantity: number;
}

const MenuPage = () => {
  const [renderedMenu, setRenderedMenu] = useState<menuSection[]>([]);
  const [activeSection, setActiveSection] = useState("1");
  const linksRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const horizontalBarHeight = 68;
  const [userCart, setUserCart] = useState<cartItem[]>([]);
  const [clickedButton, setClickedButton] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menu.map((menuItem) =>
        document.getElementById(menuItem.section.id)
      );

      const distances = sections.map((section) => {
        if (!section) return -Infinity;
        if (section.getBoundingClientRect().top - horizontalBarHeight < 30) {
          return section.getBoundingClientRect().top - horizontalBarHeight;
        }
        return -Infinity;
      });

      const closestIndex = distances.indexOf(Math.max(...distances));
      if (closestIndex !== -1) setActiveSection(menu[closestIndex].section.id);

      // const { scrollHeight, scrollTop, clientHeight } =
      //   document.documentElement;
      // if (scrollTop + clientHeight >= scrollHeight) {
      //   console.log("Scrolled to the end");
      // }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    setRenderedMenu(menu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);

  useEffect(() => {
    const activeButton = linksRef.current[activeSection];
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  const getQuantity = (id: string) =>
    userCart.find((item) => item.itemId == id)?.quantity || 0;

  return (
    <div className="pl-3 mb-24 mt-12">
      {/* Input */}
      <SearchInput menu={menu} setRenderedMenu={setRenderedMenu} />

      {/* Sections */}
      <Sections
        renderedMenu={renderedMenu}
        linksRef={linksRef}
        horizontalBarHeight={horizontalBarHeight}
        activeSection={activeSection}
        setClickedButton={setClickedButton}
      />

      {/* Menu */}
      <div className="mr-3">
        {renderedMenu.map((item) => (
          <div
            key={item.section.id}
            className={`${
              clickedButton == item.section.id ? "bg-gray-400" : "bg-red"
            } transition-colors duration-1000 ease-in-out rounded-lg pb-1.5 pl-3`}
            id={item.section.id}
          >
            <div className="font-black text-xl pt-1.5">{item.section.name}</div>

            {/* Items Mapping */}
            {item.sectionItems.map((item) => {
              const quantity = getQuantity(item.id);
              return (
                <MenuItem
                  key={item.id}
                  item={item}
                  quantity={quantity}
                  userCart={userCart}
                  setUserCart={setUserCart}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
