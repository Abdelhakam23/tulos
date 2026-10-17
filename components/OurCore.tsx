import { coreValues } from "@/constants";
import React from "react";

const OurCore = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 md:py-20">
        <div className="text-center mx-auto max-w-xl space-y-2.5 mb-12">
          <p className="uppercase leading-relaxed tracking-widest text-xs font-bold">
            What We Stand For
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight ">
            Our core values
          </h2>
          <p className="text-muted-foreground">
            These aren't just words on a wall — they shape every decision we
            make, every product we pick, and every interaction we have.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((item) => (
            <div
              key={item?.title}
              className="flex items-start gap-2.5 flex-col border border-border hover:border-primary/30 hover:shadow-md transition-all rounded-xl p-6 bg-card group"
            >
              <div className="bg-primary/10 rounded-md p-3 group-hover:bg-primary/30 transition-colors">
                {item?.icon}
              </div>
              <h2 className="font-bold text-base">{item?.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCore;
