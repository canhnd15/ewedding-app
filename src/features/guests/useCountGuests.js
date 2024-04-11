import { useQuery } from "@tanstack/react-query";
import { countGuestsByTag } from "../../services/apiGuests";

export function useCountGuests(userId) {
  const {
    isLoading,
    data: {
      friendCount,
      familyCount,
      colleaguesCount,
      relativesCount,
      total,
    } = {},
    error,
  } = useQuery({
    queryKey: ["guests"],
    queryFn: () => countGuestsByTag(userId),
  });

  return {
    friendCount,
    familyCount,
    colleaguesCount,
    relativesCount,
    total,
    isLoading,
    error,
  };
}
