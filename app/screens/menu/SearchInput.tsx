import { menuSection } from "@/app/components/DummyData";
import React, { useState } from "react";

const SearchInput = ({
  menu,
  setRenderedMenu,
}: {
  menu: menuSection[];
  setRenderedMenu: React.Dispatch<React.SetStateAction<menuSection[]>>;
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
        }
      });
      setRenderedMenu(newMenu);
    } else {
      setRenderedMenu(menu);
    }
  };

  return (
    <div className="pl-3 pr-6 shadow-sm">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
