import { instance } from "./instance";
import { ApiRoutes } from "./constants";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await instance.get<Ingredient[]>(ApiRoutes.INGRIDIETS);

  return data;
};
