import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/file3.png"}
        width={240}
        height={178}
        alt=""
        className="translate-z-0 w-full h-full opacity-60"
      />
    </div>
  );
};

export default Avatar;
