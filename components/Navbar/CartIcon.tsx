import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartIcon = () => {
  return (
    <Link href="/cart" className="relative group ">
      <ShoppingBag className="w-4 h-4 group-hover:text-darkColor hoverEffect " />
      <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3 w-3 rounded-full flex items-center justify-center text-xs font-semibold ">
        0
      </span>
    </Link>
  );
};

export default CartIcon;
