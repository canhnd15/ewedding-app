import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { batchInsertGuests } from "../../services/apiGuests";

export function useInsertGuests() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: insertGuests, isLoading: isCreating } = useMutation({
    mutationFn: ({ guests, userId }) => batchInsertGuests(guests, userId),
    onSuccess: () => {
      toast.success(t("uploadFileSuccessMessage"));
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, insertGuests };
}
