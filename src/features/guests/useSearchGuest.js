import { useQuery } from "@tanstack/react-query";
import { searchGuestsApi } from "../../services/apiGuests";

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

export function useSearchGuests(searchValue, userId) {
  const {
    isLoading,
    data: { guests, count } = {},
    error,
  } = useQuery({
    queryKey: ["guests"],
    queryFn: () => searchGuestsApi({ searchValue, userId }),
  });

  return { isLoading, error, guests, count };
}
