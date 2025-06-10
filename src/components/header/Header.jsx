import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className="menu">
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
