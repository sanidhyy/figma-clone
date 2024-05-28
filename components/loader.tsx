import Image from "next/image";

export const Loader = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
    <Image
      src="/loader.gif"
      alt="loader"
      width={100}
      height={100}
      className="object-contain"
      unoptimized
    />
    <p className="text-sm font-bold text-primary-grey-300">Loading...</p>
  </div>
);
