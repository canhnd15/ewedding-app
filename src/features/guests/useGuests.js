import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getGuests } from "../../services/apiGuests";

export function useGuests() {
  const [searchParams] = useSearchParams();

  //FILTER BY TAG
  const filterValue = searchParams.get("tags");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "tags", value: filterValue };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { guests, count } = {},
    error,
  } = useQuery({
    queryKey: ["guests", filter, page],
    queryFn: () => getGuests({ filter, page }),
  });

  return { isLoading, error, guests, count };
}
