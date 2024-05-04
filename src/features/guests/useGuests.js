import { useSearchParams } from "react-router-dom";
import { getGuests } from "../../services/apiGuests";
import { ALL_OPTION, INVITED, RECEIVED } from "../../utils/constants";
import { useQuery } from "@tanstack/react-query";

export function useGuests(userId) {
  const [searchParams] = useSearchParams();

  //FILTER BY TAG
  const filterTagsValue = searchParams.get("tags");
  const filterTags =
    !filterTagsValue || filterTagsValue === ALL_OPTION
      ? null
      : { field: "tags", value: filterTagsValue };

  //FILTER BY INVITED STATUS
  const filterInvitedValue = searchParams.get("invited");
  const filterInvited =
    !filterInvitedValue || filterInvitedValue === ALL_OPTION
      ? null
      : {
          field: "is_invited",
          value: filterInvitedValue === INVITED ? true : false,
        };

  //FILTER BY RECEIVED MONEY STATUS
  const filterTakenValue = searchParams.get("taken");
  const filterTaken =
    !filterTakenValue || filterTakenValue === ALL_OPTION
      ? null
      : {
          field: "type",
          value: filterTakenValue === RECEIVED ? true : false,
        };

  const searchQuery = searchParams.get("search");

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { guests, count } = {},
    error,
  } = useQuery({
    queryKey: [
      "guests",
      filterTags,
      filterInvited,
      filterTaken,
      searchQuery,
      page,
    ],
    queryFn: () =>
      getGuests({
        filterTags,
        filterInvited,
        filterTaken,
        searchQuery,
        page,
        userId,
      }),
  });

  return { isLoading, error, guests, count };
}
