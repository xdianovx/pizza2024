"use client";

import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngridients } from "@/hooks/useFilterIngridients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { items, loading, onAddId, selectedIds } = useFilterIngridients();
  const ingridients = items.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));
  return (
    <div className={cn(className, "")}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Чекбоксы вверх */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text={"Можно собирать"} name="asd" value={"1"} />
        <FilterCheckbox text={"Можно собирать"} name="asd" value={"2"} />
      </div>

      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />

          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            defaultValue={1000}
          />
        </div>

        <RangeSlider min={0} max={1000} step={1} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        defaultItems={ingridients.slice(0, 6)}
        className="mt-5"
        limit={6}
        items={ingridients}
        loading={loading}
        onChange={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
