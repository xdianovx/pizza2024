"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { useSet } from "react-use";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  loading?: boolean;
  searchInputPlaceholder?: string;
  onChange?: (id: string) => void;
  defaultValue?: string[];
  limit?: number;
  className?: string;
  name?: string;
  selectedValues?: Set<string>;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  items,
  defaultItems,
  selectedValues,
  searchInputPlaceholder = "Поиск... ",
  onChange,
  loading,
  defaultValue,
  name,
  title,
  limit = 5,
}) => {
  const [showAll, setShowAll] = useState();
  const [searchValue, setSearchValue] = useState("");

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="mb-5 h-6" />)}
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={cn(className, "")}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, idx) => (
          <FilterCheckbox
            key={String(idx)}
            name={name}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selectedValues?.has(item.value)}
            onCheckedChange={() => onChange?.(item.value)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
