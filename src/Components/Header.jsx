import Link from "next/link";
import SearchBar from "./SearchBar";
export default function Header() {
  const searchBarContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: "20px",
  };
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
        <section className="w-screen">
          <div style={searchBarContainer}>
            <div className="flex-shrink-0 ml-10">Logo</div>
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
