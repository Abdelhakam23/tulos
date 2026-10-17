import { privacyPolicy } from "@/constants";
import Link from "next/link";

const PrivacyPage = () => {
  return (
    <div>
      <section className="relative border-b border-border bg-card">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto  px-4 py-20 relative">
          <div className="max-w-3xl  ">
            <p className="uppercase tracking-widest font-bold text-xs text-primary mb-3">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl  font-black  tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="max-w-2xl leading-relaxed  text-muted-foreground">
              Your privacy matters to us. This policy explains exactly what data
              we collect, why we collect it, and how it's protected. Last
              updated:{" "}
              <span className="font-semibold text-primary">October 2026.</span>
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className=" mx-auto max-w-3xl grid grid-cols-1 gap-6">
            {privacyPolicy.map((item, index) => (
              <div
                key={item?.title}
                className="bg-card border border-border rounded-2xl p-6 group hover:border-primary/30 hover:shadow-sm transition-all "
              >
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-md bg-primary/10 group-hover:bg-primary/30">
                    {item?.icon}
                  </div>
                  <div className="text-start">
                    <span className="uppercase text-xs font-bold text-muted-foreground tracking-widest mb-1">
                      Section {index + 1}
                    </span>
                    <h2 className="text-lg font-bold mb-2">{item?.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item?.term}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border border-border bg-muted/30 text-center p-5 rounded-2xl   ">
              <p className="text-sm text-muted-foreground">
                Questions about our terms?{" "}
                <Link
                  href={"/support"}
                  className="text-primary font-semibold hover:underline"
                >
                  Contact our support team
                </Link>{" "}
                — we're happy to clarify anything.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
