import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { Product } from "@/sanity.types";
import { cn } from "cn";

interface Props {
  product: Omit<Product, "status"> & {
    status?: string | null;
  };
  className?: string;
}

const QuantityButtons = ({ product, className }: Props) => {
  const itemCount = 4;
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Button variant={"outline"} size={"icon"} className="w-6 h-6">
        <Minus />
      </Button>
      <span className="w-8 text-center font-semibold text-darkColor">
        {itemCount}
      </span>
      <Button variant={"outline"} size={"icon"} className="w-6 h-6">
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButtons;
