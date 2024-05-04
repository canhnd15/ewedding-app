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
export async function getGuests({
  filterTags,
  filterInvited,
  filterTaken,
  searchQuery,
  page,
  userId,
}) {
  let query = supabase
    .from("guests")
    .select("*", {
      count: "exact",
    })
    .eq("user_id", userId)
    .order("updated_at", { ascending: false });

  if (filterTags) query = query.eq(filterTags.field, filterTags.value);

  if (filterInvited) query = query.eq(filterInvited.field, filterInvited.value);

  if (filterTaken && filterTaken.value === true) {
    query = query.neq(filterTaken.field, null);
  }

  if (filterTaken && filterTaken.value === false) {
    query = query.is(filterTaken.field, null);
  }

  if (searchQuery) {
    query = query.ilike("name", `%${searchQuery}%`);
  }

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
    .update({
      is_invited: !currentInvitedStatus,
      updated_at: new Date().toISOString(),
    })
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

// UPDATE GUEST'S INVITATION METHOD (CASH, BANK_TRANSFER, OTHERS)
export async function updateInvitationMoneyType(guestId, invitationType) {
  const { data, error } = await supabase
    .from("guests")
    .update({ type: invitationType, updated_at: new Date().toISOString() })
    .eq("id", guestId)
    .select();

  if (error) throw new Error("Error when updating invitation method.");

  return { data, error };
}

export async function getDataExportExcelApi(userId) {
  let query = supabase
    .from("guests")
    .select(
      "name, phone, gave_money, notes, tags, is_invited, take_money, type",
      {
        count: "exact",
      }
    )
    .eq("user_id", userId);

  const { data: guests, error } = await query;

  if (error) {
    throw new Error("Guests could not be loaded.");
  }

  return { guests };
}

export async function upsertGuestApi(updatedGuest) {
  const { data, error } = await supabase
    .from("guests")
    .upsert(updatedGuest)
    .select();

  if (error) throw new Error("Error: " + error.message);

  return { data, error };
}

export async function countByReceivedStatus() {}

export async function getSummaryMoneyAndGuestsApiV1({ userId }) {
  const { data, error } = await supabase.rpc("calculate_guests_and_money_v1", {
    userid: userId,
  });

  if (error) {
    throw new Error("Error when counting guests.");
  }

  return data;
}
