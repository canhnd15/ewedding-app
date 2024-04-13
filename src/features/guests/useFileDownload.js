import { useQuery } from "@tanstack/react-query";
import { downloadGuestTemplateFile } from "../../services/apiFiles";

export function useFileDownload() {
  const {
    isLoading,
    data: { fileUrl } = {},
    error,
  } = useQuery({
    queryKey: ["guest_files"],
    queryFn: () => downloadGuestTemplateFile(),
  });

  return { isLoading, fileUrl, error };
}
