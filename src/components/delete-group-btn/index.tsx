"use client";

import { deleteGroup } from "@/app/actions/delete-group";

interface Props {
  id: number;
}

export default function DeleteGroupBtn({ id }: Props) {
  return (
    <button
      type="button"
      onClick={() => deleteGroup(id)}
      className="cursor-pointer"
    >
      Delete
    </button>
  );
}
