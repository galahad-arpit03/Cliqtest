import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030303]">
      <div className="relative w-48 h-48 animate-pulse">
        <Image
          src="/logo/bglogo.png"
          alt="Loading..."
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
