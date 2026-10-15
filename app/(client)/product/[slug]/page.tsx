import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import ProductDetails from "@/components/ProductDetails";
import ProductFaqs from "@/components/ProductFaqs";
import WishList from "@/components/WishList";
import { getProductBySlug } from "@/sanity/helpers/queries";
import { notFound } from "next/navigation";

const SingleProduct = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col md:flex-row w-full gap-10 py-10 mt-20 ">
      <div className="w-full md:w-1/2 ">
        {product?.images && <ImageView images={product?.images} />}
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <h2 className="text-4xl font-bold text-darkColor mb-2">
          {product?.name}
        </h2>
        <PriceView
          className=" text-lg font-bold"
          price={product?.price}
          discount={product?.discount}
        />
        <div
          className={` w-fit px-3 py-2 text-sm text-center font-semibold rounded-md ${product?.stock ? "bg-green-100" : "bg-red-200"}`}
        >
          {product?.stock ? (
            <span className="text-green-600 ">In Stock</span>
          ) : (
            <span className="text-red-600">Out Of stock</span>
          )}
        </div>
        <p className="text-sm tracking-wide text-muted-foreground">
          {product?.description}
        </p>
        <div className="flex items-center gap-3 lg:gap-5 ">
          <AddToCart
            className="bg-darkColor/70 text-white hover:bg-darkColor rounded-none py-2 h-full"
            product={product}
          />
          <WishList product={product} />
        </div>
        <ProductDetails product={product} />
        <ProductFaqs />
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-col items-center justify-center border border-darkColor/30 p-2 hover:border-darkColor transition-colors ">
            <h3 className="font-bold text-darkColor">Free Shipping</h3>
            <p className="text-sm text-muted-foreground">
              Free shipping over order $120
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border border-darkColor/30 p-2 hover:border-darkColor transition-colors ">
            <h3 className="font-bold text-darkColor">Flexible Payment</h3>
            <p className="text-sm text-muted-foreground">
              Pay with Multiple Credit Cards
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
