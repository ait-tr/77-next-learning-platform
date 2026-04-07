"use server";

import { db } from "@/db";
import { notes } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-option";
import { getServerSession } from "next-auth";
import z from "zod";

export type ActionState = {
  errors?: Record<string, string[]>;
  success?: boolean;
};

const NoteInsertSchema = z.object({
  topic: z
    .string()
    .trim()
    .min(2, "Min length is at least 2 characters")
    .max(200, "Title is too long (max 200)"),
  content: z
    .string()
    .trim()
    .min(2, "Min length is at least 3 characters")
    .max(2000, "Description is too long (max 2000)"),
  important: z.preprocess((v) => v === "true", z.boolean()),
});

export async function createNote(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const row = Object.fromEntries(formData);

  const parsed = NoteInsertSchema.safeParse(row);

  //   When we have bad data in request
  if (!parsed.success) {
    //   return { errors: { content: ["Alisher is not happy with content"] } };
    return { errors: parsed.error.flatten().fieldErrors };
  }
  // data - is information from user {content, important, topic}
  const { data } = parsed;

  //   We will get id from session
  const session = await getServerSession(authOptions);
  if (!session || !session.user.id) {
    throw new Error("Unathorized");
  }

  await db.insert(notes).values({ ...data, userId: session.user.id });

  return { success: true };
}
