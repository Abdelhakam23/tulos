import React from "react";

const OurMission = () => {
  return (
    <section className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="uppercase tracking-widest font-bold text-xs text-primary mb-4">
              Our Mission
            </p>
            <h1 className="text-3xl md:text-4xl  font-black  tracking-tight mb-6">
              Connecting people with the tech they love.
            </h1>
            <p className=" leading-relaxed  text-muted-foreground mb-6">
              We exist to close the gap between great products and the people
              who need them. Our platform curates only the best — rigorously
              tested, fairly priced, and rapidly delivered — because we believe
              everyone deserves access to tools that make life better.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We're not just a marketplace. We're a team of enthusiasts who
              genuinely love the products we carry. Every listing, every deal,
              and every recommendation comes from a place of real passion and
              expertise.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background border border-border rounded-md p-6 text-center hover:border-primary/30 transition-colors">
              <p className="text-3xl font-black text-foreground mb-1 tabular-nums">
                2020
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                Founded
              </p>
            </div>
            <div className="bg-background border border-border rounded-md p-6 text-center hover:border-primary/30 transition-colors">
              <p className="text-3xl font-black text-foreground mb-1 tabular-nums">
                45+
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                Team Size
              </p>
            </div>

            <div className="bg-background border border-border rounded-md p-6 text-center hover:border-primary/30 transition-colors">
              <p className="text-3xl font-black text-foreground mb-1 tabular-nums">
                4.9 ★
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                Avg. Rating
              </p>
            </div>
            <div className="bg-background border border-border rounded-md p-6 text-center hover:border-primary/30 transition-colors">
              <p className="text-3xl font-black text-foreground mb-1 tabular-nums">
                2%
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                Return Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
