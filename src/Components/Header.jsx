import Link from "next/link";
import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <>
      <header style={{ backgroundColor: "#f85606" }} className="flex flex-col">
        <nav style={{ justifyContent: "flex-end" }} className="flex ">
          <ul className="flex flex-row gap-20 ">
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
        <section>
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">Logo</div>
            <div className="flex-grow">
              <SearchBar />
            </div>
            <div className="flex-shrink-0">Cart</div>
          </div>
        </section>
      </header>
    </>
  );
}
