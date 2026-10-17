import Link from "next/link";
import React from "react";

const StartShopping = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-black mb-4 ">
          Ready to find your next favorite product?
        </h1>
        <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
          Browse thousands of carefully curated products across top categories,
          with deals updated every day.
        </p>
        <Link
          href={"/shop"}
          className="inline-flex gap-2.5 items-center hover:opacity-90 transition-all bg-primary-foreground px-8 py-4 rounded-full text-primary font-bold shadow-lg "
        >
          Start Shopping
        </Link>
      </div>
    </section>
  );
};

export default StartShopping;
