import { cn } from "../lib/utils";

interface Props {
  amount: number | undefined;
  className?: string;
}

const Priceformat = ({ amount, className }: Props) => {
  const formatedPrice = new Number(amount).toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 1,
  });
  return (
    <span className={cn("text-sm font-semibold text-darkColor", className)}>
      {formatedPrice}
    </span>
  );
};

export default Priceformat;
