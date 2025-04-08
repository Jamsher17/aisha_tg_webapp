import { menuSection } from "@/app/components/DummyData";
import Image from "next/image";

const Sections = ({
  renderedMenu,
  linksRef,
  horizontalBarHeight,
  activeSection,
  setActiveSection,
  setClickedButton,
  removeScroll,
  addScroll,
  clickedButton,
}: {
  renderedMenu: menuSection[];
  linksRef: React.RefObject<Record<string, HTMLButtonElement | null>>;
  horizontalBarHeight: number;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  setClickedButton: React.Dispatch<React.SetStateAction<string>>;
  removeScroll: () => void;
  addScroll: () => void;
  clickedButton: string;
}) => {
  const handleClick = (id: string) => {
    if (!clickedButton) {
      removeScroll();
      const section = document.getElementById(id);
      if (section) {
        const offsetTop = section.offsetTop - horizontalBarHeight - 15;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        setActiveSection(id);
        setClickedButton(id);

        setTimeout(() => {
          setClickedButton("");
          addScroll();
        }, 700);
      }
    }
  };

  return (
    <div
      className="w-full overflow-x-auto scrollbar-hide py-1 sticky top-0 z-10 pl-3"
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
            className={`p-2 rounded-lg ${
              activeSection === item.section.id && "bg-appGrayBg shadow-md"
            } text-black flex flex-col items-center`}
          >
            <div className="w-[70px] h-[70px] flex items-center justify-center overflow-hidden rounded-full mb-2">
              <Image
                src={item.section.imageName}
                alt={item.section.name}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-base">{item.section.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sections;
