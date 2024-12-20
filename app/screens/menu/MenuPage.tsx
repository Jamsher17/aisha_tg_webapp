"use client";
import React, { useEffect, useState, useRef } from "react";
import menu from "@/app/components/DummyData";

const MenuPage = () => {
  const [activeSection, setActiveSection] = useState("1");
  const linksRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const horizontalBarHeight = 68;

  useEffect(() => {
    const handleScroll = () => {
      const sections = menu.map((menuItem) =>
        document.getElementById(menuItem.section.id)
      );

      const distances = sections.map((section) => {
        if (!section) return Infinity;
        return Math.abs(
          section.getBoundingClientRect().top - horizontalBarHeight
        );
      });

      const closestIndex = distances.indexOf(Math.min(...distances));
      if (closestIndex !== -1) {
        setActiveSection(menu[closestIndex].section.id);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Perform initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);

  useEffect(() => {
    // Scroll the active section's button into view
    const activeButton = linksRef.current[activeSection];
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  return (
    <div className="pl-6 mb-20 mt-12">
      {/* Input */}
      <div className="pr-6">
        <input
          name="searchInp"
          type="text"
          placeholder="Search..."
          className="w-full py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Sections */}
      <div
        className="w-full overflow-x-auto py-4 sticky top-0"
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="flex gap-4 min-w-max mr-6">
          {menu.map((item, index) => (
            <button
              key={index}
              ref={(el) => {
                linksRef.current[item.section.id] = el;
              }}
              onClick={() => {
                const section = document.getElementById(item.section.id);
                if (section) {
                  const offsetTop = section.offsetTop - horizontalBarHeight;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
              className={`px-4 py-2 rounded-md ${
                activeSection === item.section.id
                  ? "bg-yellow-500"
                  : "bg-blue-500"
              } text-white`}
            >
              {item.section.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="mr-6">
        {menu.map((item) => (
          <div key={item.section.id} className="mb-3" id={item.section.id}>
            <div className="font-black text-xl my-2">{item.section.name}</div>

            {/* Items Mapping */}
            {item.sectionItems.map((item) => (
              <div
                key={item.id}
                className="flex bg-gray-200 rounded-md mb-4 text-black pr-0"
              >
                <div className="my-2 ml-2 border-r-2 border-current">
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>

                <div className="text-3xl flex flex-col justify-around">
                  <button
                    onClick={() => console.log("+")}
                    className="grow pl-3 p-2"
                  >
                    +
                  </button>
                  <hr className="border-1 border-current" />
                  <button
                    onClick={() => console.log("-")}
                    className="grow pl-3 p-2"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
