import supabase, { SUPABASE_URL } from "./supabase";

export async function uploadGuestFile(userId, file) {
  const { data, error } = await supabase.storage
    .from("guest_files")
    .upload(`${userId}/${file.name}`, file, {
      cacheControl: "max-age=3600",
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

  if (error) {
    throw new Error("Error when uploading file...");
  }

  return { data, error };
}

export async function downloadGuestTemplateFile() {
  const { data, error } = await supabase.storage
    .from("guest_files")
    .createSignedUrl(
      `${SUPABASE_URL}/storage/v1/object/public/guest_files/guest_template_file_excel.xlsx`,
      3600
    );
  //https://tkzouaxollvajkmzihrc.supabase.co/storage/v1/object/public/guest_files/guest_template_file_excel.xlsx

  if (error) {
    throw new Error("Error when downloading file.");
  }

  return { fileUrl: data?.signedURL || "" };
}
