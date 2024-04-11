import supabase from "./supabase";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  PAGE_SIZE,
  RELATIVES_TAG,
} from "../utils/constants";

export async function getGuests({ filter, page, userId }) {
  let query = supabase
    .from("guests")
    .select("*", {
      count: "exact",
    })
    .eq("user_id", userId);

  if (filter) query = query.eq(filter.field, filter.value);

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

export async function countGuestsByTag(userId) {
  let queryCountGuests = supabase
    .from("guests")
    .select("id, created_at, name, phone, gave_money, notes, tags", {
      count: "exact",
    })
    .eq("user_id", userId)
    .in("tags", [FRIEND_TAG, FAMILY_TAG, COLLEAGUES_TAG, RELATIVES_TAG]);

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

  const total = counts.length;

  return { friendCount, familyCount, colleaguesCount, relativesCount, total };
}
