import React from "react";
import { IItem, TItemType } from "@/types";

interface ItemProps {
  item: IItem;
  index: number;
  onClick: (item: IItem, index: number, type: TItemType) => void;
}

const Item: React.FC<ItemProps> = ({ item, index, onClick }) => {
  return (
    <button
      className="w-full bg-white border border-gray-300 rounded p-2 mb-2 shadow-sm hover:bg-gray-50 transition"
      onClick={() => onClick(item, index, item.type)}
    >
      {item.name}
    </button>
  );
};

Item.displayName = "Item";

export default Item;
