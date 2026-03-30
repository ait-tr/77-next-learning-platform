import { createGroup } from "@/app/actions/create-group";

export default function CreateGroup() {
  return (
    <div>
      <h2>Create Group</h2>
      <form action={createGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Cohort 00m-fs" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
