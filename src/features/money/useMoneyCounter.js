import { useQuery } from "@tanstack/react-query";
import { getSummaryMoneyAndGuestsApiV1 } from "../../services/apiGuests";

export function useMoneyCounter(userId) {
  const {
    isLoading,
    data: results,
    error,
  } = useQuery({
    queryKey: ["money_count"],
    queryFn: () => getSummaryMoneyAndGuestsApiV1({ userId }),
  });

  return { isLoading, error, results };
}
