"use client";
import { AlignLeft } from "lucide-react";
import SideBar from "../SideBar";
import { useState } from "react";

const MobileMenu = () => {
  const [sideBarOpen, setSideBaropen] = useState(false);
  return (
    <>
      <button onClick={() => setSideBaropen(!sideBarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">
        <SideBar isOpen={sideBarOpen} onClose={() => setSideBaropen(false)} />
      </div>
    </>
  );
};

export default MobileMenu;
