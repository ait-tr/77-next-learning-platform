import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link href={"/about/us"}>Us</Link>
        <Link href={"/about/me"}>Me</Link>
      </nav>
      {children}
    </div>
  );
}
