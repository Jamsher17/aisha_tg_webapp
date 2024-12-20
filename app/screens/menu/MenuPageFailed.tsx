"use client";
import { useRef, useEffect, useState } from "react";
import menu from "@/app/components/DummyData";

const MenuPageFailed = () => {
  const [activeSection, setActiveSection] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const handleSectionClick = (index: number) => {
    console.log("Clicked on Section:", index);

    const menuSections = menuRef.current?.querySelectorAll(".menuSection");
    // const stickyBarHeight =
    //   sectionsRef.current?.getBoundingClientRect().height || 0;
    const stickyBarBottom =
      sectionsRef.current?.getBoundingClientRect().bottom || 0;

    if (menuSections && menuSections[index]) {
      const theSection = menuSections[index] as HTMLElement;
      const sectionPosition = theSection.offsetTop - stickyBarBottom;

      console.log("Scrolling to Position:", sectionPosition);

      // Scroll the menu container to the calculated position
      menuRef.current?.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  const handleMenuScroll = () => {
    if (!menuRef.current || !sectionsRef.current) return;

    const menuSections = menuRef.current.querySelectorAll(".menuSection");
    // const stickyBarHeight =
    //   sectionsRef.current.getBoundingClientRect().height || 0;
    const stickyBarBottom =
      sectionsRef.current?.getBoundingClientRect().bottom || 0;

    let currentSection = 0;

    menuSections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top - stickyBarBottom;
      if (sectionTop <= stickyBarBottom) {
        currentSection = index;
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
      sectionsRef.current.scrollTo({
        left: currentSection * 100, // Adjust this value based on your button width
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      menu.addEventListener("scroll", handleMenuScroll);
    }

    return () => {
      menu?.removeEventListener("scroll", handleMenuScroll);
    };
  }, [activeSection]);

  return (
    <div className="pl-6 mb-20 mt-12">
      {/* Input */}
      <div className="pr-6">
        <input
          type="text"
          placeholder="Search..."
          className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400`}
        />
      </div>

      {/* Sections */}
      <div
        className="w-full overflow-x-auto pt-4 sticky top-0"
        ref={sectionsRef}
      >
        <div className="flex gap-4 min-w-max mr-6">
          {menu.map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md ${
                activeSection === index ? "bg-yellow-500" : "bg-blue-500"
              } text-white`}
              onClick={() => handleSectionClick(index)}
            >
              {item.section.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="mr-6 overflow-y-auto h-screen" ref={menuRef}>
        <div className="h-full">
          {menu.map((item) => (
            <div key={item.section.id} className="mb-3 menuSection">
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
    </div>
  );
};

export default MenuPageFailed;
