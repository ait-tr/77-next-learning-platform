import { db } from "@/db";
import { notes } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-option";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Notes() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.id) {
    throw new Error("Unathorized");
  }

  const userNotes = await db
    .select()
    .from(notes)
    .where(eq(notes.userId, session.user.id));

  return (
    <div className="px-20 py-8">
      <Link href={"/notes/new"}>Add note</Link>

      <ul className="flex gap-6">
        {userNotes.map((note) => (
          <li key={note.id} className="border p-4 rounded-2xl shadow">
            <Link href={`/notes/${note.id}`}>{note.topic}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
