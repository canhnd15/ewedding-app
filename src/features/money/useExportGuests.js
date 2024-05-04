import { useQuery } from "@tanstack/react-query";
import { getDataExportExcelApi } from "../../services/apiGuests";

export function useExportGuests(userId) {
  const {
    isLoading,
    data: { guests } = {},
    error,
  } = useQuery({
    queryKey: ["guests_export_data"],
    queryFn: () => getDataExportExcelApi(userId),
  });

  return { isLoading, error, guests };
}
