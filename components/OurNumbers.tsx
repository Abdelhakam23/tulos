import React from "react";
import Counter from "./Counter";

const OurNumbers = () => {
  return (
    <section className="border-b bg-background border-border ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-4xl font-black text-primary tabular-nums">
              <Counter value={120000} isKFormat={true} />
            </span>
            <p className="text-sm text-muted-foreground font-medium">
              Happy Customers
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-4xl font-black text-primary tabular-nums">
              <Counter value={8000} />
            </span>
            <p className="text-sm text-muted-foreground font-medium">
              Products Listed
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-4xl font-black text-primary tabular-nums">
              <Counter value={50} />
            </span>
            <p className="text-sm text-muted-foreground font-medium">
              Countries Served
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-4xl font-black text-primary tabular-nums">
              <Counter value={5} />
            </span>
            <p className="text-sm text-muted-foreground font-medium">
              Years of Trust
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
