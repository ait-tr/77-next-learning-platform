import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex bg-violet-200 gap-2 items-center justify-center min-h-24">
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/">Home</Link>
    </nav>
  );
}
