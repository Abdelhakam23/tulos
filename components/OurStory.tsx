import React from "react";

const OurStory = () => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto  px-4 py-20 relative">
        <div className="max-w-3xl  ">
          <p className="uppercase tracking-widest font-bold text-xs text-primary mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl  font-black leading-tight tracking-tight mb-6">
            Built for people who love great products.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl text-muted-foreground">
            Tulos started with a simple belief — shopping for quality tech
            shouldn't be complicated, overpriced, or frustrating. Since 2020,
            we've been on a mission to make premium products accessible to
            everyone, delivered with the care and speed you deserve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
