import Image from "next/image";

export default function SearchBar() {
  return (
    <>
      <div className="relative">
        <input
          className="w-[100%] h-[40px] pl-[10px] rounded-[13px]"
          type="text"
          placeholder="Search in website"
        />
        <button className="absolute top-1.5 right-2.5">
          <Image src="/Images/search.svg" width={30} height={30} alt="" />
        </button>
      </div>
    </>
  );
}
