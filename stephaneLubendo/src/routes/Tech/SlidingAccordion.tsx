import { useState } from "react";

function SlidingAccordion() {
  const [active, setActive] = useState(0);

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="flex flex-col md:flex-row w-full h-[65vh]">
      {items.map((title, idx) => (
        <div
          key={idx}
          className={`transition-all duration-500 ease-in-out 
            ${active === idx ? "flex-[3]" : "flex-1"} 
            bg-accent m-1 flex items-center justify-center cursor-pointer`}
          onClick={() => setActive(idx)}
        >
          {title}
        </div>
      ))}
    </div>
  );
}

export default SlidingAccordion;
