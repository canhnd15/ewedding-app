import supabase from "./supabase";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  OTHERS_TAG,
  PAGE_SIZE,
  RELATIVES_TAG,
} from "../utils/constants";

// GET LIST OF GUEST BY USER_ID WITH FILTER VALUES
export async function getGuests({ filterTags, filterInvited, page, userId }) {
  let query = supabase
    .from("guests")
    .select("*", {
      count: "exact",
    })
    .eq("user_id", userId);

  if (filterTags) query = query.eq(filterTags.field, filterTags.value);
  if (filterInvited) query = query.eq(filterInvited.field, filterInvited.value);

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data: guests, error, count } = await query;

  if (error) {
    throw new Error("Guests could not be loaded.");
  }

  return { guests, count };
}

// COUNT NUMBER OF GUESTS VIA TAG AND INVITED STATUS
export async function countGuestsApi(userId) {
  let queryCountGuests = supabase
    .from("guests")
    .select("tags, is_invited", {
      count: "exact",
    })
    .eq("user_id", userId)
    .in("tags", [
      FRIEND_TAG,
      FAMILY_TAG,
      COLLEAGUES_TAG,
      RELATIVES_TAG,
      OTHERS_TAG,
    ]);

  const { data: counts, error } = await queryCountGuests;

  if (error) {
    throw new Error("Error when counting guests by tags.");
  }

  const friendCount = counts.filter((guest) =>
    guest.tags.includes(FRIEND_TAG)
  ).length;

  const familyCount = counts.filter((guest) =>
    guest.tags.includes(FAMILY_TAG)
  ).length;

  const colleaguesCount = counts.filter((guest) =>
    guest.tags.includes(COLLEAGUES_TAG)
  ).length;

  const relativesCount = counts.filter((guest) =>
    guest.tags.includes(RELATIVES_TAG)
  ).length;

  const othersCount = counts.filter((guest) =>
    guest.tags.includes(OTHERS_TAG)
  ).length;

  const invitedCount = counts.filter(
    (guest) => guest.is_invited === true
  ).length;

  const notInvitedCount = counts.filter(
    (guest) => guest.is_invited === false
  ).length;

  const total = counts.length;

  return {
    friendCount,
    familyCount,
    colleaguesCount,
    relativesCount,
    othersCount,
    invitedCount,
    notInvitedCount,
    total,
  };
}

// UPLOAD LIST OF GUESTS VIA A TEMPLATE FILE
export async function batchInsertGuestsByFile(guests, userId) {
  const { error: deleteError } = await supabase
    .from("guests")
    .delete()
    .eq("user_id", userId);

  if (deleteError)
    throw new Error("Error when deleting existing guest records.");

  const { data, error } = await supabase.from("guests").insert(guests).select();
  if (error) {
    throw new Error("Error when inserting new guest records.");
  }

  return { data, error };
}

// ADD LIST OF GUESTS WHEN USER INPUT FROM GUEST FORM
export async function batchInsertGuestsManually(guests) {
  const { data, error } = await supabase.from("guests").insert(guests).select();

  if (error) {
    throw new Error(error.message);
  }
  return { data, error };
}

// UPDATE GUEST'S INVITED STATUS -> TRUE: INVITED | FALSE: UNINVITED
export async function updateInvitedStatusApi(guestId, currentInvitedStatus) {
  const { data, error } = await supabase
    .from("guests")
    .update({ is_invited: !currentInvitedStatus })
    .eq("id", guestId)
    .select();

  if (error) throw new Error("Error when updating invited status.");

  return { data, error };
}

// DELETE A GUEST BY GUEST_ID
export async function deleteGuestByIdApi(guestId) {
  const { error } = await supabase.from("guests").delete().eq("id", guestId);

  if (error) throw new Error("Error when deleting guest.");
}

// SEARCH
export async function searchGuestsApi(searchValue) {
  let { data: guests, error } = await supabase
    .from("guests")
    .select("*")
    .like("name", `%${searchValue}%`);

  if (error) throw new Error("Error when searching...");

  return { guests, error };
}
