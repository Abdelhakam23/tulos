import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import PriceView from "./PriceView";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group text-sm rounded-lg overflow-hidden">
      <div className="bg-linear-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden relative">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt="ProductImage"
              priority
              className={`object-contain overflow-hidden w-full h-72 ${product?.stock !== 0 && "group-hover:scale-105"} hoverEffect`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-darkColor/50">
            <p className="text-base text-white font-semibold capitalize">
              out Of Stock
            </p>
          </div>
        )}
      </div>
      <div className="px-2 py-3 flex flex-col gap-1.5 bg-zinc-50 border border-t-0  rounded-lg rounded-tl-none rounded-tr-none">
        <h2 className="font-semibold  line-clamp-1">{product?.name}</h2>
        <p className="text-xs line-clamp-1 whitespace-pre-line">
          {product?.intro}
        </p>
        <PriceView
          className="text-lg"
          price={product?.price}
          discount={product?.discount}
        />
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
