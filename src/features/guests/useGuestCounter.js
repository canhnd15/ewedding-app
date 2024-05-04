import { useQuery } from "@tanstack/react-query";
import { getSummaryMoneyAndGuestsApiV1 } from "../../services/apiGuests";

export function useGuestCounter(userId) {
  const {
    isLoading,
    data: results,
    error,
  } = useQuery({
    queryKey: ["guests_counter"],
    queryFn: () => getSummaryMoneyAndGuestsApiV1({ userId }),
  });

  return { isLoading, error, results };
}
