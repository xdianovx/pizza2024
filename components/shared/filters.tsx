"use client";

import React, { useEffect } from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngridients } from "@/hooks/useFilterIngridients";
import { useSet } from "react-use";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const {
    items,
    loading,
    onAddId,
    selectedIds: indridients,
  } = useFilterIngridients();
  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [types, { toggle: toggleTypes }] = useSet(new Set<string>([]));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  const ingridients = items.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  useEffect(() => {
    console.log({ price, sizes, types, indridients });
  }, [price, sizes, types, indridients]);
  return (
    <div className={cn(className, "")}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Чекбоксы вверх */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        items={[
          {
            text: "Традиционное",
            value: "20",
          },
          {
            text: "Тонкое",
            value: "30",
          },
        ]}
        loading={loading}
        onChange={toggleTypes}
        selectedValues={types}
      />

      {/* Чекбоксы вверх */}
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        items={[
          {
            text: "20 см",
            value: "20",
          },
          {
            text: "30 см",
            value: "30",
          },
          {
            text: "40 см",
            value: "40",
          },
        ]}
        loading={loading}
        onChange={toggleSizes}
        selectedValues={sizes}
      />

      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            value={price.priceFrom}
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />

          <Input
            type="number"
            value={price.priceTo}
            placeholder="1000"
            min={0}
            max={1000}
            defaultValue={1000}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        defaultItems={ingridients.slice(0, 6)}
        className="mt-5"
        limit={6}
        items={ingridients}
        loading={loading}
        onChange={onAddId}
        selectedValues={indridients}
      />
    </div>
  );
};
