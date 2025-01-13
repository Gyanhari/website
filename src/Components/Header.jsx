import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="z-20">
        <nav className="flex justify-end">
          <ul className="flex flex-row gap-20">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">Help & Support</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="">Change-Language</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
