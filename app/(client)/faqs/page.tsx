import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsDetails } from "@/constants";
import { CircleQuestionMark, MessageCircle } from "lucide-react";
import Link from "next/link";

const FaqsPage = () => {
  return (
    <div>
      <section className="relative border-b border-border bg-card">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative ">
          <div className="mx-auto flex flex-col gap-2.5 items-center justify-center">
            <div className="flex items-center justify-center rounded-2xl w-14 h-14 bg-primary/10">
              <CircleQuestionMark className="w-6 h-6" />
            </div>
            <span className="uppercase text-xs font-bold text-primary tracking-widest">
              Support
            </span>
            <h1 className="font-black text-4xl md:text-5xl tracking-tight ">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Can't find what you're looking for? Browse below or{" "}
              <Link
                href={"/support"}
                className="text-primary font-semibold hover:underline"
              >
                reach our support team
              </Link>{" "}
              directly.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-border bg-background">
        <div className="px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <Accordion
              defaultValue={["item-0"]}
              multiple={false}
              className="grid grid-cols-1 gap-6"
            >
              {faqsDetails.map((item, index) => {
                const itemValue = `item-${index}`;
                return (
                  <AccordionItem
                    className={
                      "p-3 bg-card border border-border rounded-md hover:border-primary/30 "
                    }
                    key={item?.title}
                    value={itemValue}
                  >
                    <AccordionTrigger
                      className={
                        "flex items-center gap-3 cursor-pointer hover:no-underline"
                      }
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-primary/10 text-xs font-black text-primary rounded-full">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-base  ">
                        {item?.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className={"px-4"}>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item?.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <div className="bg-card border border-border rounded-2xl p-8 mt-6 ">
              <div className="flex flex-col sm:flex-row text-center sm:text-left  items-center gap-5">
                <span className="p-3 rounded-md text-primary bg-primary/10 ">
                  <MessageCircle className="w-6 h-6" />
                </span>
                <div className="flex-1 ">
                  <h3 className="font-bold text-primary text-base mb-1">
                    Still have questions?
                  </h3>
                  <p className=" text-sm text-muted-foreground">
                    Our support team is available Monday–Friday, 9am–6pm. We
                    typically respond within 2 hours.
                  </p>
                </div>
                <Link
                  className=" px-6 py-3 bg-primary rounded-full text-primary-foreground text-sm font-bold hover:opacity-90 transition-all"
                  href={"/support"}
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqsPage;
