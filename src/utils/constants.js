import { SUPABASE_URL } from "../services/supabase";

export const PAGE_SIZE = 10;

export const ALL_OPTION = "all";

export const FRIEND_TAG = "FRIEND";
export const COLLEAGUES_TAG = "COLLEAGUES";
export const FAMILY_TAG = "FAMILY";
export const RELATIVES_TAG = "RELATIVES";
export const OTHERS_TAG = "OTHERS";

export const INVITED = "invited";
export const NOT_INVITED = "not-invited";

export const SUPABASE_GUEST_FILE_TEMPLATE_BUCKET = "guest_files";
export const PUBLIC_GUEST_LIST_EXCEL_TEMPLATE = `${SUPABASE_URL}/storage/v1/object/public/guest_files/public/guest_template_file_excel.xlsx`;
