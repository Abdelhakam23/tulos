"use client";

import { Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useCallback, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import PriceView from "../PriceView";
import AddToCart from "../AddToCart";

const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProduct([]);
      return;
    }
    setLoading(true);
    try {
      const query = `*[_type == "product" && name match $search]`;
      const params = { search: `${search}*` };

      const response = await client.fetch(query, params);
      setProduct(response);
    } catch (error) {
      console.error("Error While Searching Product", error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const debounceTime = setTimeout(() => {
      fetchProducts();
    }, 300);
    return () => clearTimeout(debounceTime);
  }, [search, fetchProducts]);

  const handleOpenchange = (isOpen: boolean) => {
    setSearchOpen(isOpen);
    if (!isOpen) {
      setSearch("");
      setProduct([]);
    }
  };

  return (
    <Dialog open={searchOpen} onOpenChange={handleOpenchange}>
      <DialogOverlay className="bg-black/60 backdrop-blur-sm!" />
      <DialogTrigger onClick={() => setSearchOpen(!searchOpen)}>
        <Search className="w-4 h-4 hover:text-darkColor hoverEffect " />
      </DialogTrigger>
      <DialogContent className=" rounded-none lg:max-w-4xl! max-w-150! md:max-w-160!  flex flex-col overflow-hidden max-h-[90vh] p-0">
        <DialogHeader className="p-4">
          <DialogTitle>
            <p className="uppercase text-xs font-semibold tracking-widest text-muted-foreground mb-4">
              Search
            </p>
          </DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <button
              type="submit"
              className="absolute top-0 left-0  h-full w-10 flex items-center  justify-center"
            >
              <Search className=" w-5 h-5 text-muted-foreground text-xs" />
            </button>
            <Input
              className="rounded-none  shadow-sm py-5 px-10  focus-visible:ring-0 ring-0 border-0"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-1 top-1/2 -translate-y-1/2 hover:text-red-500 hoverEffect"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>
        </DialogHeader>
        <div className="border-t overflow-y-auto px-4 w-full h-full ">
          <div className="text-center py-5 tracking-wide">
            {loading ? (
              <p> Searching For Product....</p>
            ) : product.length ? (
              <div className=" px-1 flex flex-col gap-2.5 items-start text-left">
                {product?.map((item, index) => (
                  <div
                    key={item?._id}
                    className={`w-full ${index === product?.length - 1 ? "" : "border-b"} p-1`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2  justify-between  w-full">
                      <Link
                        href={`/product/${item?.slug?.current}`}
                        className="flex md:items-center gap-2.5"
                        onClick={() => handleOpenchange(false)}
                      >
                        <div className="w-25 h-25 md:w-30 md:h-30 shrink-0 border border-border group relative  rounded-md  overflow-hidden ">
                          <Image
                            src={urlFor(
                              item?.images ? item.images[0] : "",
                            ).url()}
                            alt="ProductImage"
                            fill
                            className="object-contain w-full h-full group-hover:scale-110 hoverEffect"
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          <h2 className="font-semibold text-darkColor">
                            {item?.name}
                          </h2>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {item?.intro}
                          </p>
                          <PriceView
                            price={item?.price}
                            discount={item?.discount}
                          />
                        </div>
                      </Link>
                      <div>
                        <AddToCart product={item} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {" "}
                {search ? (
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-base font-semibold">
                      No results found
                    </h3>
                    <p className="text-sm text-muted-foreground ">
                      No Products matched with <span>"{search}"</span>. try
                      something else
                    </p>
                  </div>
                ) : (
                  <p className="font-semibold text-green-500 flex items-center justify-center gap-1">
                    <Search className="w-5 h-5" />
                    Search and Explore the products
                  </p>
                )}{" "}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
