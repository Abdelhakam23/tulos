import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url";
import { Repeat } from "lucide-react";
import TabBar from "./TabBar";
export interface Category {
  _id: string;
  title: string;
  description?: string;
  image?: SanityImageSource;
}

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <TabBar onTabSelect={onTabSelect} selectedTab={selectedTab} />

      <button className="border border-darkColor p-2 md:p-2.5 rounded-full hover:bg-darkColor hover:text-white hoverEffect ">
        <Repeat className="w-4 h-4" />
      </button>
    </div>
  );
};

export default HomeTabBar;
