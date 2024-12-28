import { menuSection } from "@/app/components/DummyData";

const Sections = ({
  renderedMenu,
  linksRef,
  horizontalBarHeight,
  activeSection,
  setClickedButton,
}: {
  renderedMenu: menuSection[];
  linksRef: React.RefObject<Record<string, HTMLButtonElement | null>>;
  horizontalBarHeight: number;
  activeSection: string;
  setClickedButton: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - horizontalBarHeight - 15;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setClickedButton(id);
      setTimeout(() => setClickedButton(""), 1000);
    }
  };

  return (
    <div
      className="w-full overflow-x-auto scrollbar-hide py-4 sticky top-0 z-10 pl-3"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="flex gap-4 min-w-max mr-6">
        {renderedMenu.map((item, index) => (
          <button
            key={index}
            ref={(el) => {
              linksRef.current[item.section.id] = el;
            }}
            onClick={() => handleClick(item.section.id)}
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
