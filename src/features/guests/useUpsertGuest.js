import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { upsertGuestApi } from "../../services/apiGuests";

export function useUpsertGuest() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: upsertGuest, isLoading: isUpdating } = useMutation({
    mutationFn: (guest) => upsertGuestApi(guest),
    onSuccess: () => {
      toast.success(t("updateSuccessfullyMessage"));
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, upsertGuest };
}
