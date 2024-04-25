import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { updateInvitationMoneyType } from "../../services/apiGuests";
import toast from "react-hot-toast";

export function useUpdateInvitationType() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: updateInvitationType, isLoading: isUpdating } = useMutation({
    mutationFn: ({ guestId, invitationType }) =>
      updateInvitationMoneyType(guestId, invitationType),
    onSuccess: () => {
      toast.success(t("updateSuccessfullyMessage"));
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateInvitationType };
}
