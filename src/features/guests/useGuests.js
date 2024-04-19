import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getGuests } from "../../services/apiGuests";
import { ALL_OPTION, INVITED } from "../../utils/constants";

export function useGuests(userId) {
  const [searchParams] = useSearchParams();

  //FILTER BY TAG
  const filterTagsValue = searchParams.get("tags");
  const filterTags =
    !filterTagsValue || filterTagsValue === ALL_OPTION
      ? null
      : { field: "tags", value: filterTagsValue };

  const filterInvitedValue = searchParams.get("invited");
  const filterInvited =
    !filterInvitedValue || filterInvitedValue === ALL_OPTION
      ? null
      : {
          field: "is_invited",
          value: filterInvitedValue === INVITED ? true : false,
        };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { guests, count } = {},
    error,
  } = useQuery({
    queryKey: ["guests", filterTags, filterInvited, page],
    queryFn: () => getGuests({ filterTags, filterInvited, page, userId }),
  });

  return { isLoading, error, guests, count };
}
