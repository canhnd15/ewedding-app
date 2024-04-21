import { useQuery } from "@tanstack/react-query";
import { countGuestsApi } from "../../services/apiGuests";

export function useCountGuests(userId) {
  const {
    isLoading,
    data: {
      friendCount,
      familyCount,
      colleaguesCount,
      relativesCount,
      othersCount,
      invitedCount,
      notInvitedCount,
      total,
    } = {},
    error,
  } = useQuery({
    queryKey: ["guests"],
    queryFn: () => countGuestsApi(userId),
  });

  return {
    friendCount,
    familyCount,
    colleaguesCount,
    relativesCount,
    othersCount,
    invitedCount,
    notInvitedCount,
    total,
    isLoading,
    error,
  };
}
