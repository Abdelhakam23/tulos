import { Product } from "@/sanity.types";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import QuantityButtons from "./QuantityButtons";
import Priceformat from "./Priceformat";

interface Props {
  product: Omit<Product, "status"> & {
    status?: string | null;
  };
  className?: string;
}

const AddToCart = ({ product, className }: Props) => {
  const outOfStock = product?.stock === 0;
  const itemcount = 0;
  return (
    <div className="w-full">
      {itemcount ? (
        <div className="w-full ">
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs font-medium text-muted-foreground">
              Quantity
            </span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">SubTotal</span>
            <Priceformat
              amount={
                product?.price && product?.discount
                  ? product?.discount * itemcount
                  : product?.price
                    ? product?.price * itemcount
                    : 0
              }
            />
          </div>
        </div>
      ) : (
        <Button
          disabled={outOfStock}
          className={cn(
            "text-sm border border-darkColor/30 font-semibold tracking-wide text-darkColor shadow-none hover:text-white  hoverEffect w-full bg-transparent py-1 rounded-sm",
            className,
          )}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default AddToCart;
