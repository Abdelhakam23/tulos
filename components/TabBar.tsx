"use client";

import { productType } from "@/constants";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const TabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center gap-3 ">
      {productType.map((item) => (
        <button
          onClick={() => onTabSelect(item?.title)}
          className={`border border-darkColor px-4 py-1 md:px-6 md:py-2 rounded-full hover:bg-darkColor hover:text-white text-sm font-semibold hoverEffect
                 ${selectedTab === item?.title && "bg-darkColor text-white"}`}
          key={item?.title}
        >
          {item?.title}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
