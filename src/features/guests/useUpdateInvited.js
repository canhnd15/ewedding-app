import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { updateInvitedStatusApi } from "../../services/apiGuests";

export function useUpdateInvited() {
  const { t } = useTranslation();
  //   const queryClient = useQueryClient();

  const { mutate: updateInvitedStatus, isLoading: isUpdating } = useMutation({
    mutationFn: ({ guestId, currentInvitedStatus }) =>
      updateInvitedStatusApi(guestId, currentInvitedStatus),
    onSuccess: () => {
      toast.success(t("updateSuccessfullyMessage"));
      //   queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateInvitedStatus };
}
