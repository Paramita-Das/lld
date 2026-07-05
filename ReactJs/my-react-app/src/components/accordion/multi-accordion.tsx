import React, { useState } from "react";
import Accordion from "./accordion";

const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript.",
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React.",
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js.",
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js.",
  },
];

const MultiAccordion = () => {
  const [showIndex, setShowIndex] = useState(null);
  const [checkedItems, setCheckedItems] = useState(Array(items.length).fill(false));
  const handleCheck = (index) => {
    setCheckedItems([...checkedItems, index])
  }

   
  
  return (
    <>
      {items.map((item, index) => (
        <Accordion
          key={item.title}
          item={item}
          isDropdownOpen={showIndex === index}
          onToggle={() =>
            setShowIndex((prev) => (prev === index ? null : index))
          }
          isChecked={checkedItems[index] === index}
          onCheckItem={() => handleCheck(index)}
        />
      ))}
      <button type="submit" disabled={!(items.length === checkedItems.length)}>Submit</button>
    </>
  );
};

export default MultiAccordion;
