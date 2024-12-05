"use client";

import React, { useState } from "react";
import { Column } from "@/components";
import { Item, ItemType } from "@/types";

import classes from "./Home.module.css";

// Initial items array
const initialItems: Item[] = [
  { type: "Fruit", name: "Apple" },
  { type: "Vegetable", name: "Broccoli" },
  { type: "Vegetable", name: "Mushroom" },
  { type: "Fruit", name: "Banana" },
  { type: "Vegetable", name: "Tomato" },
  { type: "Fruit", name: "Orange" },
  { type: "Fruit", name: "Mango" },
  { type: "Fruit", name: "Pineapple" },
  { type: "Vegetable", name: "Cucumber" },
  { type: "Fruit", name: "Watermelon" },
  { type: "Vegetable", name: "Carrot" },
];

export default function Home() {
  const [mainList, setMainList] = useState<Item[]>(initialItems);
  const [fruits, setFruits] = useState<Item[]>([]);
  const [vegetables, setVegetables] = useState<Item[]>([]);

  const handleMainItemClick = (item: Item, index: number) => {
    const newMainList = [...mainList];
    newMainList.splice(index, 1);
    setMainList(newMainList);

    if (item.type === "Fruit") {
      setFruits((prev) => [...prev, item]);
    } else {
      setVegetables((prev) => [...prev, item]);
    }

    setTimeout(() => {
      moveItemBack(item);
    }, 5000);
  };

  const handleCetegoryItemCLick = (
    item: Item,
    index: number,
    type: ItemType
  ) => {
    if (type === "Fruit") {
      const newFruits = [...fruits];
      newFruits.splice(index, 1);
      setFruits(newFruits);
    } else {
      const newVegetables = [...vegetables];
      newVegetables.splice(index, 1);
      setVegetables(newVegetables);
    }

    setMainList((prev) => [...prev, item]);
  };

  const moveItemBack = (item: Item) => {
    if (item.type === "Fruit") {
      setFruits((prev) => prev.filter((i) => i.name !== item.name));
    } else {
      setVegetables((prev) => prev.filter((i) => i.name !== item.name));
    }

    setMainList((prev) => [...prev, item]);
  };

  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className={classes["main-grid"]}>
        <Column
          title="Main List"
          items={mainList}
          onClick={handleMainItemClick}
        />
        <Column
          title="Fruits"
          items={fruits}
          onClick={handleCetegoryItemCLick}
        />
        <Column
          title="Vegetables"
          items={vegetables}
          onClick={handleCetegoryItemCLick}
        />
      </div>
    </div>
  );
}
