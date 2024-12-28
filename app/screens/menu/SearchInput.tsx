import { menuSection } from "@/app/components/DummyData";
import React, { useState } from "react";

const SearchInput = ({
  menu,
  setRenderedMenu,
  setActiveSection,
}: {
  menu: menuSection[];
  setRenderedMenu: React.Dispatch<React.SetStateAction<menuSection[]>>;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (e.target.value) {
      let newMenu: menuSection[] = [];
      menu.map((section) => {
        const filtered = section.sectionItems.filter((item) =>
          item.name.toLowerCase().startsWith(e.target.value.toLowerCase())
        );
        if (filtered.length > 0) {
          newMenu.push({
            section: section.section,
            sectionItems: filtered,
          });
          setActiveSection(newMenu[0].section.id);
        }
      });
      setRenderedMenu(newMenu);
    } else {
      setRenderedMenu(menu);
      setActiveSection(menu[0].section.id);
    }
  };

  return (
    <div className="pl-3 pr-6">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full py-2 px-1 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 bg-appGrayBg shadow-lg"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
