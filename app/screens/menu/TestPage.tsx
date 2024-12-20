"use client";
import { useRef, useEffect, useState } from "react";

const ScrollSyncComponent = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 0, title: "Section 1" },
    { id: 1, title: "Section 2" },
    { id: 2, title: "Section 3" },
    { id: 3, title: "Section 4" },
    { id: 4, title: "Section 5" },
    { id: 5, title: "Section 6" },
  ];

  const handleButtonClick = (index: number) => {
    const sectionTitles = cardsRef.current?.querySelectorAll(".sectionTitle");
    const stickyBarHeight =
      buttonsRef.current?.getBoundingClientRect().height || 0;

    if (sectionTitles && sectionTitles[index]) {
      const theTitle = sectionTitles[index] as HTMLElement;
      const theTitlePosition = theTitle.offsetTop - stickyBarHeight;
      cardsRef.current?.scrollTo({ top: theTitlePosition, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll(".sectionTitle");
    const stickyBarHeight =
      buttonsRef.current?.getBoundingClientRect().height || 0;
    let currentSection = 0;
    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top - stickyBarHeight;
      if (cardTop <= 0) {
        currentSection = Math.floor(index / 5);
      }
    });
    if (currentSection !== activeSection) {
      buttonsRef.current?.scrollTo({
        left: currentSection * 100, // Adjust this value as per button width and spacing
        behavior: "smooth",
      });
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    const cardsContainer = cardsRef.current;
    if (cardsContainer) {
      cardsContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      cardsContainer?.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="relative">
      {/* Sticky Buttons */}
      <div
        ref={buttonsRef}
        className="sticky top-0 flex space-x-2 overflow-x-auto bg-gray-100 p-2"
      >
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleButtonClick(index)}
            className={`px-4 py-2 rounded-md ${
              activeSection === section.id ? "bg-yellow-500" : "bg-blue-500"
            } text-white`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div ref={cardsRef} className="overflow-y-scroll h-screen">
        {sections.map((item, _) => (
          <div key={item.id} className="sectionTitle">
            <h1>{item.title}</h1>
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className="h-40 bg-gray-200 text-black border m-2 p-4 flex items-center justify-center"
              >
                <h1>Section {item.id + 1}</h1>
                Card {index + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSyncComponent;
