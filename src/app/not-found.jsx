import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-screen h-screen m-auto flex md:flex-col flex-row items-center justify-center">
      <Image
        src="/Images/not-found.png"
        width={100}
        height={100}
        alt="Not-Found"
      />
      <div>404 Not Found</div>
    </div>
  );
}
