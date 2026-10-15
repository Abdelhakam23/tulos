import Priceformat from "./Priceformat";
import { cn } from "../lib/utils";

const PriceView = ({
  price,
  discount,
  className,
}: {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-2")}>
      {price && discount && (
        <Priceformat amount={discount} className={className} />
      )}
      {discount && (
        <Priceformat
          amount={price}
          className={cn("line-through  text-zinc-500 font-medium", className)}
        />
      )}
      {price && !discount && (
        <Priceformat amount={price} className={className} />
      )}
    </div>
  );
};

export default PriceView;
