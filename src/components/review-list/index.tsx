import { FC } from "react";
import { InferSelectModel } from "drizzle-orm";
import { reviewsTable } from "@/db/schema";
import Link from "next/link";

// вывели тип на основании схемы базы данных
type Review = InferSelectModel<typeof reviewsTable>;

interface Props {
  reviews: Review[];
}

export const ReviewList: FC<Props> = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id} className="max-w-30 border p-2   ">
          <Link href={`/reviews/${review.id}`}>
            <h3>{review.title}</h3>
            <div className="truncate">{review.content}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
