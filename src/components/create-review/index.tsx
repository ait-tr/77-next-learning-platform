import { createReview } from "@/app/actions/create-review";

export default function CreateReview() {
  return (
    <div>
      <h2>Create Review</h2>
      <form action={createReview}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title of Review"
        />

        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          id="content"
          placeholder="Please write your review here"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
