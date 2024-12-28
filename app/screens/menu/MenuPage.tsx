"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
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
  const [activeSection, setActiveSection] = useState(menu[0].section.id);
  const linksRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const horizontalBarHeight = 115;
  const [userCart, setUserCart] = useState<cartItem[]>([]);
  const [clickedButton, setClickedButton] = useState("");

  const handleScroll = useCallback(() => {
    const sections = menu.map((menuItem) =>
      document.getElementById(menuItem.section.id)
    );

    const distances = sections.map((section) => {
      if (!section) return -Infinity;
      if (section.getBoundingClientRect().top - horizontalBarHeight < 35) {
        return section.getBoundingClientRect().top - horizontalBarHeight;
      }
      return -Infinity;
    });

    if (distances.find((item) => item > -Infinity)) {
      const closestIndex = distances.indexOf(Math.max(...distances));
      if (closestIndex !== -1) {
        setActiveSection(menu[closestIndex].section.id);
      }
    }
  }, []);

  const addScroll = useCallback(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const removeScroll = useCallback(() => {
    window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    addScroll();

    setRenderedMenu(menu);
    handleScroll();

    return () => removeScroll();
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
    <div className="pl-3 mb-24 mt-10">
      {/* Input */}
      <SearchInput
        menu={menu}
        setRenderedMenu={setRenderedMenu}
        setActiveSection={setActiveSection}
      />

      {/* Sections */}
      <Sections
        renderedMenu={renderedMenu}
        linksRef={linksRef}
        horizontalBarHeight={horizontalBarHeight}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setClickedButton={setClickedButton}
        removeScroll={removeScroll}
        addScroll={addScroll}
        clickedButton={clickedButton}
      />

      {/* Menu */}
      {renderedMenu.length === 0 && <div>There is no products to display</div>}
      <div className="mr-3">
        {renderedMenu.map((item) => (
          <div
            key={item.section.id}
            className={`${
              clickedButton == item.section.id ? "bg-gray-400" : "bg-red"
            } transition-colors duration-500 ease-in-out rounded-lg pb-1.5 pl-3`}
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
