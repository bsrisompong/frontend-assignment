import React, { useEffect } from "react";
import { Item, ItemType } from "@/types";

interface ColumnProps {
  title: string;
  items: Item[];
  onClick: (item: Item, index: number, type: ItemType) => void;
}

const Column = React.memo(({ title, items, onClick }: ColumnProps) => {
  useEffect(() => {
    console.log(`Column - ${title} - render`);
  }, [title]);

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded shadow-md w-full">
      <h2 className="font-bold text-lg mb-4">{title}</h2>
      {items.map((item, index) => (
        <button
          key={`${item.name}-${index}`}
          className="w-full bg-white border border-gray-300 rounded p-2 mb-2 shadow-sm hover:bg-gray-50 transition"
          onClick={() => onClick(item, index, item.type)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
});

Column.displayName = "Column";

export default Column;
