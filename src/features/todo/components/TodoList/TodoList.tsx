"use client";

import React, { useRef, useState } from "react";
import { Column } from "@/components";
import { type IItem, type TItemType } from "@/features/todo";

import classes from "./TodoList.module.css";

const initialItems: IItem[] = [
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

export default function TodoList() {
  const [mainList, setMainList] = useState<IItem[]>(initialItems);
  const [fruits, setFruits] = useState<IItem[]>([]);
  const [vegetables, setVegetables] = useState<IItem[]>([]);

  const timersRef = useRef<Record<string, NodeJS.Timeout>>({});
  // console.log("🚧 - file: page.tsx:31 - timersRef:", timersRef.current);

  const handleMainItemClick = (item: IItem, index: number) => {
    const newMainList = [...mainList];
    newMainList.splice(index, 1);
    setMainList(newMainList);

    if (item.type === "Fruit") {
      setFruits((prev) => [...prev, item]);
    } else {
      setVegetables((prev) => [...prev, item]);
    }

    timersRef.current[item.name] = setTimeout(() => {
      moveItemBack(item);
    }, 5000);
  };

  const handleCetegoryItemCLick = (
    item: IItem,
    index: number,
    type: TItemType
  ) => {
    if (timersRef.current[item.name]) {
      clearTimeout(timersRef.current[item.name]);
      delete timersRef.current[item.name];
    }

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

  const moveItemBack = (item: IItem) => {
    if (item.type === "Fruit") {
      setFruits((prev) => prev.filter((i) => i.name !== item.name));
    } else {
      setVegetables((prev) => prev.filter((i) => i.name !== item.name));
    }

    setMainList((prev) => [...prev, item]);

    delete timersRef.current[item.name];
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
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
