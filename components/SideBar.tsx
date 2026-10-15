import { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Navbar/Logo";
import { X } from "lucide-react";
import { navbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./socialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sideBarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect cursor-auto w-full backdrop-blur-xs ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        ref={sideBarRef}
        className="min-w-72 max-w-96 bg-darkColor h-full text-white/80 p-10 border-r border-r-white flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">Tulos</Logo>
          </button>
          <button className="hover:text-red-500 hoverEffect" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="flex flex-col items-start text-base tracking-wide  gap-3.5 font-semibold  capitalize">
          {navbarData?.map((item) => {
            const isActive = pathname === item?.href;
            return (
              <Link
                onClick={onClose}
                key={item?.title}
                href={item?.href}
                className={`hover:text-white hoverEffect  relative group ${isActive && "text-white"}`}
              >
                {item?.title}
                <span
                  className={`absolute -bottom-0.5 bg-white hoverEffect h-0.5 ${!isActive ? "left-1/2 w-0    group-hover:w-1/2 group-hover:left-0" : "left-0 w-1/2"}`}
                />
                <span
                  className={`absolute -bottom-0.5 bg-white hoverEffect h-0.5 ${!isActive ? "right-1/2 w-0    group-hover:w-1/2 group-hover:right-0" : "right-0 w-1/2"}`}
                />
              </Link>
            );
          })}
        </div>
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default SideBar;
