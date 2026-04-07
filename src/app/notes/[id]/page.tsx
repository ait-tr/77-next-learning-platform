import { db } from "@/db";
import { notes } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-option";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";

const NotePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.id) {
    throw new Error("Unathorized");
  }
  const noteId = Number((await params).id);

  const [note] = await db
    .select()
    .from(notes)
    .where(eq(notes.id, noteId))
    .limit(1);

  return (
    <div>
      <h2>{note.topic}</h2>
      <p>{note.important && "Important"}</p>
      <p>{note.content}</p>
    </div>
  );
};

export default NotePage;
