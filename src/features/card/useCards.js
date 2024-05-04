import { useSearchParams } from "react-router-dom";
import { getAllCardApi } from "../../services/apiCard";
import { useQuery } from "@tanstack/react-query";

export function useCards() {
  //   const [searchParams] = useSearchParams();
  //   const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  //   const page = 1;

  const {
    isLoading,
    data: { cards, count } = {},
    error,
  } = useQuery({
    queryKey: ["card_templates"],
    queryFn: () => getAllCardApi(),
  });

  return { isLoading, error, cards, count };
}
