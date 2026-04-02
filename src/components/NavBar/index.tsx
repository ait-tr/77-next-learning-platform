import Link from "next/link";
import AuthButton from "../auth-button";

export default function NavBar() {
  return (
    <nav className="flex flex-wrap bg-violet-200 gap-2 items-center justify-center min-h-24">
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/grids">Grids</Link>
      <Link href="/groups">Groups</Link>
      <Link href="/groups/new">Add group</Link>
      <Link href="/todos">Todos</Link>
      <Link href="/">Home</Link>
      <AuthButton />
    </nav>
  );
}
