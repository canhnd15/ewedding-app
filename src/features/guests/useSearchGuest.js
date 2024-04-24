import { useQuery } from "@tanstack/react-query";
import { getGuests, searchGuestsApi } from "../../services/apiGuests";

// export function useSearchGuests(searchValue) {
//   const {
//     isLoading,
//     data: { guests } = {},
//     error,
//   } = useQuery({
//     queryKey: ["guests", searchValue],
//     queryFn: () => searchGuestsApi(searchValue),
//   });

//   return { isLoading, guests, error };
// }

export function useSearchGuests(userId) {
  const {
    isLoading,
    data: { guests, count } = {},
    error,
  } = useQuery({
    queryKey: ["guests"],
    queryFn: () => getGuests({ userId }),
  });

  return { isLoading, error, guests, count };
}
