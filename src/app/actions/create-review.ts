"use server";

import { db } from "@/db";
import { reviewsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createReview(formData: FormData) {
  const title = formData.get("title")!.toString();
  const content = formData.get("content")!.toString();
  const newReview = { title, content };

  await db.insert(reviewsTable).values(newReview);
  revalidatePath("/reviews");
}
