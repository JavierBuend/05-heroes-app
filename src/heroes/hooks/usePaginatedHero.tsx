import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.actions";

export const usePaginatedHero = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["heroes", { page, limit }],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 100 * 60 * 5, //5 minutos
  });
};
