import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadGuestFile } from "../../services/apiFiles";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useFileUpload() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: uploadFile, isLoading: isUploading } = useMutation({
    mutationFn: ({ userId, file }) => uploadGuestFile(userId, file),
    onSuccess: () => {
      toast.success(t("uploadFileSuccessMessage"));
      queryClient.invalidateQueries({ queryKey: ["guest_files"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUploading, uploadFile };
}
