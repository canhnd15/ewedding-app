import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

export async function getGuests({ filter, page }) {
  let query = supabase
    .from("guests")
    .select("id, created_at, name, phone, gave_money, notes, tags", {
      count: "exact",
    });

  console.log(filter);
  console.log(page);

  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

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
