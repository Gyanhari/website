import Image from "next/image";

export default function SearchBar() {
  return (
    <>
      <form action="">
        <div className="relative">
          <input
            className="w-[100%] h-[40px] pl-[10px] rounded-[13px] "
            type="text"
            placeholder="Seatch in website"
          />
          <button>
            <Image
              className="absolute top-0 right-10"
              src="/Images/search.svg"
              width={30}
              height={30}
              alt=""
            />
          </button>
        </div>
      </form>
    </>
  );
}
