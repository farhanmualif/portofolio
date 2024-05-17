import { useState } from "react";

export default function Navbar() {
  const menus = [
    { id: 1, text: "about" },
    { id: 2, text: "project" },
    { id: 3, text: "contact" },
  ];

  const [activeId, setActiveId] = useState<number>();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <ul className="list-none mb-0 text-center">
      {menus.map((menu) => (
        <li
          className="py-2 group"
          onClick={() => setActiveId(menu.id)}
          onMouseEnter={() => setHoveredId(menu.id)}
          onMouseLeave={() => setHoveredId(null)}>
          <a
            href={`#${menu.text}`}
            className="px-8 text-blue-gray-100 active:border-blue-gray-100">
            {menu.text}
          </a>
          <div
            className={`mt-3 w-0 border ${
              activeId === menu.id || hoveredId === menu.id
                ? "border-b-2 border-blue-gray-100 transition-all duration-300 w-full"
                : "border-[#0F162B]"
            } `}></div>
        </li>
      ))}
    </ul>
  );
}
