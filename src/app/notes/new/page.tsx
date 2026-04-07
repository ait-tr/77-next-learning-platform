"use client";

import { ActionState, createNote } from "@/app/actions/create-note";
import { useActionState } from "react";

export default function CreateNote() {
  const initialState: ActionState = {};
  const [state, action] = useActionState(createNote, initialState);
  return (
    <div className="flex items-center justify-center px-20 py-8">
      <form
        action={action}
        className="flex flex-col w-2xl p-6 shadow rounded-2xl gap-4"
      >
        <input type="text" name="topic" placeholder="Topic" />
        {state.errors?.topic && (
          <p className="text-red-400">{state.errors?.topic[0]}</p>
        )}

        <textarea rows={5} name="content" placeholder="Content" />
        {state.errors?.content && (
          <p className="text-red-400">{state.errors?.content[0]}</p>
        )}

        <div>
          <input type="checkbox" name="important" id="important" value="true" />
          <label htmlFor="important">Important</label>
        </div>

        {state.success && <p className="text-green-400">Created</p>}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
