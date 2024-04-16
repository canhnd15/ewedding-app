import axios from "axios";
import * as xlsx from "xlsx";
import supabase, { SUPABASE_URL } from "./supabase";

export async function getUserGuestFileById(userId) {
  const { data: fileList, error: fileError } = await supabase.storage
    .from("guest-template-files")
    .list();

  if (fileError) {
    throw new Error("Error when checking for existing file...");
  }

  const file = fileList.find((file) => file.name === `${userId}.xlsx`);

  return { file };
}

export async function uploadGuestFile(userId, file) {
  const { data: fileList, error: fileError } = await supabase.storage
    .from("guest-template-files")
    .list();

  // If there was an error while checking for the file, throw an error
  if (fileError) {
    throw new Error("Error when checking for existing file...");
  }

  // Check if the file exists
  const existingFile = fileList.find((file) => file.name === `${userId}.xlsx`);

  // Upload the file if it doesn't exist
  if (!existingFile) {
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("guest-template-files")
      .upload(`${userId}.xlsx`, file, {
        cacheControl: "max-age=3600",
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

    // If there was an error during upload, throw an error
    if (uploadError) {
      throw new Error("Error when uploading file...");
    }

    return { uploadData, uploadError };
  }

  // Update the file if it exists
  const { data: updateData, error: updateError } = await supabase.storage
    .from("guest-template-files")
    .update(`${userId}.xlsx`, file, {
      cacheControl: "max-age=3600",
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      upsert: true,
    });

  // If there was an error during update, throw an error
  if (updateError) {
    throw new Error("Error when updating file...");
  }

  return { updateData, updateError };
}

export async function updateGuestFile() {}

export async function getAllFilesInBucket() {
  const { data, error } = await supabase.storage
    .from("avatars")
    .list("folder", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });
}

export async function getPublicTemplateUrl() {
  const { data, error } = supabase.storage
    .from("guest_files")
    .getPublicUrl(
      "f0733c2b-2b3a-4129-ad87-4e14efe04187/guest_template_file_excel.xlsx"
    );

  if (error) {
    throw new Error("Error when downloading file.");
  }
  return data;
}

export async function downloadGuestTemplateFile() {
  const { data, error } = await supabase.storage
    .from("guest-private-files")
    .getPublicUrl()
    .createSignedUrl(
      `${SUPABASE_URL}/storage/v1/object/sign/guest-private-files/guest_template_file_excel.xlsx`,
      60,
      {
        download: true,
      }
    );

  console.log(data);

  //https://tkzouaxollvajkmzihrc.supabase.co/storage/v1/object/sign/guest-private-files/guest_template_file_excel.xlsx?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJndWVzdC1wcml2YXRlLWZpbGVzL2d1ZXN0X3RlbXBsYXRlX2ZpbGVfZXhjZWwueGxzeCIsImlhdCI6MTcxMzIzNzQxMCwiZXhwIjoxNzE1ODI5NDEwfQ.nDyi3vbhCz5I9mlmt3vZYfwpdwjjeFs7MGFpnb5g3E8&t=2024-04-16T03%3A16%3A50.748Z
  //https://tkzouaxollvajkmzihrc.supabase.co/storage/v1/object/public/guest_files/guest_template_file_excel.xlsx

  if (error) {
    throw new Error("Error when downloading file.");
  }

  return { data };
}
