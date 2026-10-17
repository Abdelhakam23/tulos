import React from "react";
import Container from "../Container";
import FooterTop from "./FooterTop";
import Logo from "../Navbar/Logo";
import SocialMedia from "../socialMedia";
import { Input } from "../ui/input";
import { categoriesData, quickLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo>tulos</Logo>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolore
              qui dignissimos nam? Optio, accusamus?
            </p>
            <SocialMedia
              className="text-darkColor/60 border-darkColor/60 hover:border-darkColor hover:text-darkColor "
              iconClassName="group-hover:text-darkColor"
              toolTipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((item) => (
                <Link
                  className="font-medium text-gray-600 hover:text-darkColor hoverEffect text-sm"
                  key={item?.title}
                  href={item?.href}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Categories</h3>
            <div className="flex flex-col gap-2">
              {categoriesData.map((item) => (
                <Link
                  className="font-medium text-gray-600 hover:text-darkColor hoverEffect text-sm"
                  key={item?.title}
                  href={item?.href}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-darkColor mb-4">NewsLetter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to recive updates and exclusive
              offers.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className=" px-4  border-gray-300  focus-visible:ring-1 focus:ring-gray-200"
              />
              <button
                className="w-full bg-darkColor px-4 py-2 rounded-lg text-white hover:bg-gray-800 hoverEffect"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
