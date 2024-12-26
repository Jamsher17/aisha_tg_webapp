"use client";
import { menuSection } from "@/app/components/DummyData";
import React from "react";

const Sections = ({
  renderedMenu,
  linksRef,
  horizontalBarHeight,
  activeSection,
}: {
  renderedMenu: menuSection[];
  linksRef: React.RefObject<Record<string, HTMLButtonElement | null>>;
  horizontalBarHeight: number;
  activeSection: string;
}) => {
  return (
    <div
      className="w-full overflow-x-auto py-4 sticky top-0 z-10"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="flex gap-4 min-w-max mr-6">
        {renderedMenu.map((item, index) => (
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
                ? "bg-orange-300"
                : "bg-gray-200"
            } text-black`}
          >
            {item.section.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sections;
