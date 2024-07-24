"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const cats = [
    { name: "Пиццы", id: 1 },
    { name: "Комбо", id: 2 },
    { name: "Закуски", id: 3 },
  ];
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 roinded-2xl", className)}
    >
      {cats.map(({ name, id }, idx) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          key={idx}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
