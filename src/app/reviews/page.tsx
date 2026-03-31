import CreateReview from "@/components/create-review";
import { ReviewList } from "@/components/review-list";
import { db } from "@/db";
import { reviewsTable } from "@/db/schema";

export default async function Reviews() {
  const reviews = await db.select().from(reviewsTable);

  return (
    <div>
      <h2>Reviews</h2>
      <ReviewList reviews={reviews} />
      <CreateReview />
    </div>
  );
}
