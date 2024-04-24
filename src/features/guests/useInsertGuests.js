import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import {
  batchInsertGuestsByFile,
  batchInsertGuestsManually,
} from "../../services/apiGuests";

export function useInsertGuestsByFile() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: insertGuestsByFile, isLoading: isCreating } = useMutation({
    mutationFn: ({ guests, userId }) => batchInsertGuestsByFile(guests, userId),
    onSuccess: () => {
      toast.success(t("uploadFileSuccessMessage"));
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, insertGuestsByFile };
}

export function useInsertGuestsManually() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const {
    mutate: insertGuestsManually,
    isLoading: isCreating,
    status,
  } = useMutation({
    mutationFn: ({ guests }) => batchInsertGuestsManually(guests),
    onSuccess: () => {
      toast.success(t("updateGuestsSuccessMessage"));
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, insertGuestsManually, status };
}
