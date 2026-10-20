"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CircleCheck, Mail, Send, User } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="bg-card ">
      <div className="max-w-7xl mx-auto">
        <div className=" max-w-5xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row gap-16">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Let's start a <span className="italic"> conversation </span>{" "}
            </h1>
            <p className="text-muted-foreground mb-6 text-lg  leading-relaxed">
              Whether you have a question about features, trials, pricing, or
              anything else, our team is ready to answer all your questions.
            </p>
            <div className="pr-4 space-y-6">
              <div className="flex items-center gap-3 p-5 bg-background border border-border rounded-2xl ">
                <div className="bg-card p-3 flex items-center justify-center border border-border rounded-md shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">
                    Chat to us
                  </span>
                  <p className="font-bold text-lg">support@tulos.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 bg-background border border-border rounded-2xl ">
                <div className="bg-card p-3 flex items-center justify-center border border-border rounded-md shadow-md">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Office</span>
                  <p className="font-bold text-lg">New Cairo, Egypt</p>
                </div>
              </div>
              <div className="p-8 bg-primary/5 border border-primary/10 rounded-3xl">
                <span className="flex items-center gap-2 text-sm font-medium mb-3">
                  <CircleCheck className="w-4 h-4" />
                  Quick Response
                </span>
                <p className="text-muted-foreground text-sm">
                  Our typical response time is within 24 hours during business
                  days. We appreciate your patience!
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="p-8 md:p-10  rounded-[2.5rem] border border-border/60 bg-card shadow-2xl shadow-primary/5 h-fit ">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1" htmlFor="name">
                    Full Name
                  </label>
                  <Input
                    required
                    className="border border-border/60 bg-muted/10 h-14  px-4 focus-visible:ring-primary/20 focus-visible:ring-1  rounded-2xl shadow-sm placeholder:text-muted-foreground"
                    placeholder="Mahmoud Abdelhakam"
                    id="name"
                    name="name"
                  />
                </div>

                <label className="text-sm font-semibold" htmlFor="email">
                  Email Address
                </label>
                <Input
                  required
                  className="border border-border/60 bg-muted/10 h-14  px-4 focus-visible:ring-primary/20 focus-visible:ring-1  rounded-2xl shadow-sm placeholder:text-muted-foreground"
                  placeholder="mahmoud@gmail.com"
                  id="email"
                  name="email"
                />

                <label className="text-sm font-semibold" htmlFor="message">
                  Your Message
                </label>
                <Textarea
                  required
                  className="  flex text-base resize-none border border-border/60 bg-muted/10   px-4 py-4 focus-visible:ring-primary/20 focus-visible:ring-1  rounded-2xl shadow-sm placeholder:text-muted-foreground"
                  rows={5}
                  placeholder="Tell us how we can help"
                  id="message"
                  name="message"
                ></Textarea>

                <button
                  type="submit"
                  className="w-full flex items-center gap-2 justify-center py-4 transition-colors font-bold rounded-2xl h-16 bg-primary hover:bg-primary/90 group text-primary-foreground "
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
