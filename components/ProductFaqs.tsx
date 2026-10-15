import { productFaqs } from "@/constants";
import React from "react";

const ProductFaqs = () => {
  return (
    <div className="border-t border-b flex flex-wrap items-center justify-between gap-2.5  py-5 px-2">
      {productFaqs.map((item) => (
        <div
          key={item?.title}
          className="flex items-center gap-1.5  text-sm text-foreground hover:text-destructive hoverEffect"
        >
          {item?.icon}
          <span className="">{item?.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductFaqs;
