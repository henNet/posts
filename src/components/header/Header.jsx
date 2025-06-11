import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className="menu">
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/posts-client">Posts lado Cliente</Link>
      <Link href="/posts">Posts lado Servidor</Link>
      <Link href="/db">Banco de dados</Link>
    </div>
  );
}
