import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
export const Logo = ({ className = "" }) => {
  return (
    <Image
      width={50}
      height={50}
      className={cn("max-w-[100px]", className)}
      src={logo}
      alt="logo"
    />
  );
};
