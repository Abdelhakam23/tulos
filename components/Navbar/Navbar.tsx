import { currentUser } from "@clerk/nextjs/server";
import Container from "../Container";
import CartIcon from "./CartIcon";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavbarMenu from "./NavbarMenu";
import SearchBar from "./Searchbar";
import {
  ClerkLoaded,
  Show,
  SignedIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { ListOrdered } from "lucide-react";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <nav className="sticky  z-50 bg-background top-0   border-b border-b-gray-400 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <div className="hidden md:flex">
          <NavbarMenu />
        </div>

        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo>Tulos</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <Show when={"signed-in"}>
              <Link href="/orders" className="relative group ">
                <ListOrdered className="w-4 h-4 group-hover:text-darkColor hoverEffect " />
                <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3 w-3 rounded-full flex items-center justify-center text-xs font-semibold ">
                  0
                </span>
              </Link>
              <UserButton />
            </Show>
            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-darkColor hoverEffect capitalize">
                  login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
