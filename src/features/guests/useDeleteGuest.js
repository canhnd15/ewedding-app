import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { deleteGuestByIdApi } from "../../services/apiGuests";
import toast from "react-hot-toast";

export function useDeleteGuest(guestId) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: deleteGuestById, isLoading: isDeleting } = useMutation({
    mutationFn: ({ guestId }) => deleteGuestByIdApi(guestId),
    onSuccess: () => {
      toast.success(t("deleteSuccessfullyMessage"));
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteGuestById, isDeleting };
}
