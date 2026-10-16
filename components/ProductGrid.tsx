"use client";
import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";
import NoProductsAvailable from "./NoProductsAvailable";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const ProductGrid = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const query = `*[_type=='product' && $selectedTab in categories[]->title]`;
  const params = { selectedTab: selectedTab };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await client.fetch(query, params);
        // console.log(data.intro);
        setProducts(data);
      } catch (error) {
        console.log("Error Fetching Products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTab]);

  return (
    <div className="flex flex-col items-center mt-10">
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div className="flex flex-col space-y-4 mt-10 py-10 items-center justify-center bg-gray-100 w-full rounded-lg min-h-80">
          <div className="flex items-center text-blue-600 space-x-2">
            <Loader2 className="animate-spin" />
            <span className="text-lg font-semibold">
              Products Is Loading ...
            </span>
          </div>
        </div>
      ) : products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full py-10 items-center justify-center  mt-10">
          {products.map((product) => (
            <AnimatePresence key={product?._id}>
              <motion.div
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProductCard product={product} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        <NoProductsAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
};

export default ProductGrid;
