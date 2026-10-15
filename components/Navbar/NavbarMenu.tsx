"use client";
import { navbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-5 font-semibold text-sm capitalize">
      {navbarData?.map((item) => {
        const isActive = pathname === item?.href;
        return (
          <Link
            key={item?.title}
            href={item?.href}
            className={`hover:text-darkColor hoverEffect relative group ${isActive && "text-darkColor"}`}
          >
            {item?.title}
            <span
              className={`absolute -bottom-0.5 bg-darkColor hoverEffect h-0.5 ${!isActive ? "left-1/2 w-0    group-hover:w-1/2 group-hover:left-0" : "left-0 w-1/2"}`}
            />
            <span
              className={`absolute -bottom-0.5 bg-darkColor hoverEffect h-0.5 ${!isActive ? "right-1/2 w-0    group-hover:w-1/2 group-hover:right-0" : "right-0 w-1/2"}`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarMenu;
