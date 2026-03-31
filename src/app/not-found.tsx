import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col px-20 py-6 justify-center items-center gap-6">
      <h2 className="text-2xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
