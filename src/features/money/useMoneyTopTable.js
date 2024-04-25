import { useQuery } from "@tanstack/react-query";
import { getSummaryMoneyAndGuestsApi } from "../../services/apiGuests";

export function useMoneyTopTable(userId) {
  const {
    isLoading,
    data: result,
    error,
  } = useQuery({
    queryKey: ["guests"],
    queryFn: () => getSummaryMoneyAndGuestsApi(userId),
  });

  return { isLoading, error, result };
}
