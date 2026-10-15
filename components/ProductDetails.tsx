import { Product } from "@/sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface Props {
  product: Omit<Product, "status"> & {
    status?: string | null;
  };
  className?: string;
}
const ProductDetails = ({ product, className }: Props) => {
  const releaseYear = product?._createdAt
    ? new Date(product?._createdAt).getFullYear()
    : "2026";

  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger className={"font-bold "}>
          {product?.name}:Characteristics
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <p className="flex items-center justify-between">
            condition / Status:
            <span className="font-bold tracking-wide  uppercase text-xs bg-darkColor text-white px-2 py-0.5 rounded">
              {product?.status}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Collection Year:
            <span className="font-bold tracking-wide text-gray-900">
              {releaseYear}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Availability:
            <span
              className={`font-bold tracking-wide ${product?.stock ? "text-green-600" : "text-red-500"}`}
            >
              {product?.stock
                ? `In Stock ${product?.stock} items`
                : "Out Of Stock"}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Product code (ID):
            <span className="font-mono text-xs font-bold text-gray-700 tracking-wide">
              {product?._id ? product._id.slice(0, 8) : "N/A"}
            </span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductDetails;
