import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  // ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          asperiores non distinctio iste quia facere in dolores ex sed
          perferendis nisi eum, consequatur doloremque aspernatur tempora. Modi
          veritatis nobis tenetur?
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
