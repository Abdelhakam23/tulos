import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { Product } from "@/sanity.types";
import { cn } from "cn";

interface Props {
  product: Omit<Product, "status"> & {
    status?: string | null;
  };
  className?: string;
}

const WishList = ({ product, className }: Props) => {
  return (
    <button className="border-2 border-darkColor/30 text-darkColor/30  px-2 hover:text-darkColor hover:border-darkColor   py-2 hoverEffect">
      <Heart className="h-5 w-5 " />
    </button>
  );
};

export default WishList;
