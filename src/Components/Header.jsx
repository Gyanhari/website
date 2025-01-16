import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";
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
      <header
        style={{ backgroundColor: "#f85606", padding: "1rem 2rem 0  0" }}
        className="flex flex-col "
      >
        <div className="flex flex-col gap-5">
          <nav style={{ justifyContent: "flex-end" }} className="flex ">
            <ul className="flex flex-row gap-20 mr-20">
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
          <section style={{ paddingBottom: "2rem" }} className="w-[100%]">
            <div style={searchBarContainer}>
              <div className="flex-shrink-0 ml-10">
                <Link href="/">
                  <Image
                    src={"/Images/daraz.png"}
                    width={100}
                    height={100}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div style={{ flexGrow: 1 }} className="flex-grow">
                <SearchBar />
              </div>
              <div className="flex-shrink-0">
                <Link href="/cart">
                  <Image
                    src={"/Images/cart.svg"}
                    width={30}
                    height={30}
                    alt="Cart"
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
