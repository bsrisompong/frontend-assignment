import React from "react";
import { IItem, TItemType } from "@/types";
import Item from "@/components/Item";

interface ColumnProps {
  title: string;
  items: IItem[];
  onClick: (item: IItem, index: number, type: TItemType) => void;
}

const Column: React.FC<ColumnProps> = ({ title, items, onClick }) => (
  <div className="flex flex-col items-center bg-gray-100 p-4 rounded shadow-md w-full">
    <h2 className="font-bold text-lg mb-4">{title}</h2>
    {items.map((item, index) => (
      <Item
        key={`${item.name}-${index}`}
        item={item}
        index={index}
        onClick={onClick}
      />
    ))}
  </div>
);

export default Column;
