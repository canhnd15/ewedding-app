import { CARD_TEMPS_PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getAllCardApi() {
  let query = supabase
    .from("card_templates")
    .select("image_url, image_alt, is_premium, title", {
      count: "exact",
    });

  //   if (page) {
  //     const from = (page - 1) * CARD_TEMPS_PAGE_SIZE;
  //     const to = from + CARD_TEMPS_PAGE_SIZE - 1;

  //     query = query.range(from, to);
  //   }

  const { data: cards, error, count } = await query;
  if (error) {
    throw new Error(error.message);
  }

  return { cards, count };
}
